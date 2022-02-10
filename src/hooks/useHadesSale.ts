import { BigNumber, Contract, ethers } from 'ethers'
import {
    useTokenFactoryContract,
    useAuctionFactoryContract,
    useTokenContract,
    useCrowdsaleContract
} from 'hooks/useContract'
import React, { useCallback, useEffect, useState } from 'react'
import useActiveWeb3React from './useActiveWeb3React'

const useHadesSale = () => {
    // const sara = '0xDB8fD34B637a14c8DacF9ECfF51a6A7E5387B720' // wallet
    // const tokenAddress = '0x74Eb00a3631096d2DBC4a9bE1f6A24B89cFF6340' // token
    const [tokenFeeCost, setTokenFeeCost] = useState('0');
    
    const tokenContract = useTokenContract(tokenAddress)
    const soulContract = useTokenContract('0xf1498e8103359fD96c5E08fb34b4C249B619025a')
    const auctionFactoryContract = useAuctionFactoryContract()
    const {account} = useActiveWeb3React()
    const crowdsaleContract = useCrowdsaleContract();

    const zero_address = '0x0000000000000000000000000000000000000000';
    const zero_data = '0x000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

    // Create Sale
    const createSale = useCallback(
        async (tid: string , data: string, name: string, symbol: string) => {
            console.log('creating sale...')

            try {
                const tx = await auctionFactoryContract?.createMarket(tid, tokenAddress, '1000000000000000000000', zero_address, data, {from: sara});
                // let crowdsaleAddress = tx.logs[0].args.addr;
                // console.log('crowdsaleAddress: ', crowdsaleAddress)

                const tx_data = await tx.wait()
                console.log('tx', tx_data)
                return tx_data
            } catch (e) {
                console.error("createSale::useCallback error: ", e)
                return undefined
            }
        },
        []
    )

    const getCrowdsaleData = async (
        startTime: string | undefined,
        endTime: string | null | undefined,
        price: string | undefined,
        goal: string | undefined,
        admin: string | undefined,
        wallet: string | undefined,
    ): Promise<string> => {
        try {
            // const iSupply = ethers.utils.parseUnits(supply??'0', 18)
            // let iOwner: any = owner;
            // if(owner === '') {
            //     iOwner = account
            // }
            const data = await crowdsaleContract?.getCrowdsaleInitData(auctionFactoryContract?.address,
                tokenContract?.address, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '1000000000000000000000',
                startTime, endTime, price, goal,
                admin, zero_address, wallet);
            console.log("data: ", data);
            return data
            // return await tokenContract?.getInitData(name, symbol, iOwner, iSupply)
        } catch (e) {
            return zero_data
        }
    }

    const getTokenFeeCost = async () => {
        try {
            const fee =  await tokenFactoryContract?.minimumFee()
            setTokenFeeCost(ethers.utils.formatUnits(fee, 18))
        } catch (e) {
            console.log(e)
            setTokenFeeCost('0')
        }
    }

    useEffect(() => {
        getTokenFeeCost()

    }, [account, tokenFactoryContract])

    return { createSale, getCrowdsaleData, getTokenFeeCost }
}

export default useHadesSale