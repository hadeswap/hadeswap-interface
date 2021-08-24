import { exchange, masterchef } from 'apollo/client'
import { liquidityPositionSubsetQuery, pairSubsetQuery, poolsQuery } from 'apollo/queries'
import { useCallback, useEffect, useState } from 'react'

import { BigNumber } from '@ethersproject/bignumber'
import Fraction from '../entities/Fraction'
import { POOL_DENY } from '../constants'
import { getAverageBlockTime } from 'apollo/getAverageBlockTime'
import orderBy from 'lodash/orderBy'
import range from 'lodash/range'
import sushiData from 'hadeswap-beta-data'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useBoringHelperContract } from 'hooks/useContract'
import { token } from 'hadeswap-beta-data/typings/exchange'

// Todo: Rewrite in terms of web3 as opposed to subgraph
const useFarms = () => {
    const [farms, setFarms] = useState<any | undefined>()
    const { account } = useActiveWeb3React()
    const boringHelperContract = useBoringHelperContract()
    // sushiData.masterchef
    //     .pools({block: 55000})
    //     .then(pools => console.log(pools))
    // sushiData.exchange
    //     .tokens({block: 100000})
    //     .then(pools => console.log(pools))
    // sushiData.exchange
    //     .observePairs()
    //     .subscribe({next: (pairs) => console.log(pairs), error: (err) => console.log(err)})
    const fetchAllFarms = useCallback(async () => {
        const results = await Promise.all([
            masterchef.query({
                // results[0]
                query: poolsQuery
            }),
            exchange.query({
                // results[1]
                query: liquidityPositionSubsetQuery,
                // Plutus address
                variables: { user: '0xb4BE34C7430FF011b653166570E211C15a03e4fA' }
            }),
            getAverageBlockTime(), // results[2]
            sushiData.sushi.priceUSD(), // results[3]
        ])
        const pools = results[0]?.data.pools
        const pairAddresses = pools
            .map((pool: any) => {
                return pool.pair
            })
            .sort()
        const pairsQuery = await exchange.query({
            query: pairSubsetQuery,
            variables: { pairAddresses }
        })

        const liquidityPositions = results[1]?.data.liquidityPositions
        const averageBlockTime = results[2]
        const sushiPrice = results[3]


        const pairs = pairsQuery?.data.pairs

        const mapi : Map<string, any> = new Map<string, any>()

        const tokens = pools
            .filter((pool: any) => {
                return !(
                    // !POOL_DENY.includes(pool?.id) &&
                    pairs.find((pair: any) => pair?.id === pool?.pair)
                )
            })


        for (const token of tokens) {
            const tokenData = await boringHelperContract?.getTokenInfo([token.pair])
            mapi.set(token.pair, tokenData)
        }

        const farms = pools
            // .filter((pool: any) => {
            //     return (
            //         // !POOL_DENY.includes(pool?.id) &&
            //         (pairs.find((pair: any) => pair?.id === pool?.pair) )
            //     )
            // })
            .map((pool: any) => {
                    let isPair = true;
                    let pair = pairs.find((pair: any) => pair.id === pool.pair)
                    const liquidityPosition = liquidityPositions.find(
                        (liquidityPosition: any) => liquidityPosition.pair.id === pair.id
                    )
                    if(pair === undefined) {
                        // CASE: token
                        const tokenData = mapi.get(pool.pair)
                        // console.log(Fraction.from(
                        //     tokenData[0][4],
                        //     BigNumber.from(10).pow(tokenData[0][4])
                        // ).toString())
                        pair = {
                            totalSupply: tokenData[0][4].toFixed(),
                            reserveUSD: 0,
                            token0: {
                                name: tokenData[0][2],
                                symbol: tokenData[0][3],
                                id: pool.pair
                            },
                            token1: {
                                name: "",
                                symbol: ""
                            },
                            id:pool.pair
                        }
                        isPair = false;
                    }
                    const blocksPerHour = 3600 / Number(averageBlockTime)
                    const balance = Number(pool.balance / 1e18) > 0 ? Number(pool.balance / 1e18) : 0.1
                    const totalSupply = pair.totalSupply > 0 ? pair.totalSupply : 0.1
                    const reserveUSD = pair.reserveUSD > 0 ? pair.reserveUSD : 0.1
                    const balanceUSD = (balance / Number(totalSupply)) * Number(reserveUSD)
                    const rewardPerBlock =
                        ((pool.allocPoint / pool.owner.totalAllocPoint) * pool.owner.soulPerBlock) / 1e18
                    const roiPerBlock = (rewardPerBlock * sushiPrice) / balanceUSD
                    const roiPerHour = roiPerBlock * blocksPerHour
                    const roiPerDay = roiPerHour * 24
                    const roiPerMonth = roiPerDay * 30
                    const roiPerYear = roiPerMonth * 12

                    return {
                        ...pool,
                        type: 'HLP',
                        symbol: pair.token1.symbol!==""? pair.token0.symbol + '-' + pair.token1.symbol : pair.token0.symbol,
                        name: pair.token0.name + ' ' + pair.token1.name,
                        pid: Number(pool.id),
                        pairAddress: pair.id,
                        slpBalance: pool.balance,
                        liquidityPair: pair,
                        roiPerBlock,
                        roiPerHour,
                        roiPerDay,
                        roiPerMonth,
                        roiPerYear,
                        rewardPerThousand: 1 * roiPerDay * (1000 / sushiPrice),
                        tvl: liquidityPosition?.liquidityTokenBalance
                            ? (pair.reserveUSD / pair.totalSupply) * liquidityPosition.liquidityTokenBalance
                            : 0.1,
                        isPair: isPair
                    }

            })

        console.log('farms:', farms)
        const sorted = orderBy(farms, ['pid'], ['desc'])

        const pids = sorted.map(pool => {
            return pool.pid
        })

        if (account) {
            const userFarmDetails = await boringHelperContract?.pollPools(account, pids)
            const userFarms = userFarmDetails
                .filter((farm: any) => {
                    return farm.balance.gt(BigNumber.from(0)) || farm.pending.gt(BigNumber.from(0))
                })
                .map((farm: any) => {
                    //console.log('userFarm:', farm.pid.toNumber(), farm)

                    const pid = farm.pid.toNumber()
                    const farmDetails = sorted.find((pair: any) => pair.pid === pid)

                    console.log('farmDetails:', farmDetails)
                    let deposited
                    let depositedUSD
                    if (farmDetails && farmDetails.type === 'KMP') {
                        deposited = Fraction.from(
                            farm.balance,
                            BigNumber.from(10).pow(farmDetails.liquidityPair.asset.decimals)
                        ).toString()
                        depositedUSD =
                            farmDetails.totalAssetStaked && farmDetails.totalAssetStaked > 0
                                ? (Number(deposited) * Number(farmDetails.tvl)) / farmDetails.totalAssetStaked
                                : 0
                    } else {
                        deposited = Fraction.from(farm.balance, BigNumber.from(10).pow(18)).toString(18)
                        depositedUSD =
                            farmDetails.slpBalance && Number(farmDetails.slpBalance / 1e18) > 0
                                ? (Number(deposited) * Number(farmDetails.tvl)) / (farmDetails.slpBalance / 1e18)
                                : 0
                    }
                    const pending = Fraction.from(farm.pending, BigNumber.from(10).pow(18)).toString(18)

                    return {
                        ...farmDetails,
                        type: farmDetails.type,
                        depositedLP: deposited,
                        depositedUSD: depositedUSD,
                        pendingSoul: pending
                    }
                })
            setFarms({ farms: sorted, userFarms: userFarms })
            console.log('Farms:', sorted)
            console.log('userFarms:', userFarms)
        } else {
            setFarms({ farms: sorted, userFarms: [] })
        }
    }, [account, boringHelperContract])

    useEffect(() => {
        fetchAllFarms()
    }, [fetchAllFarms])

    return farms
}

export default useFarms
