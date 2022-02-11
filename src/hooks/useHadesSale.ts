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

    // const tokenContract = useTokenContract(tokenAddress)
    const auctionFactoryContract = useAuctionFactoryContract()
    const { account } = useActiveWeb3React()
    const crowdsaleContract = useCrowdsaleContract();

    const zero_address = '0x0000000000000000000000000000000000000000';
    const zero_data = '0x000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

    // Create Sale
    const createSale = useCallback(
        async (tid: string, data: string, tokenAddress: string, owner: string | undefined) => {
            console.log('creating sale...')
            try {
                let iOwner: any = owner;
                if(owner === '') {
                    iOwner = account
                }
                const tx = await auctionFactoryContract?.createMarket(tid, tokenAddress, '1000000000000000000000', zero_address, data, {from: iOwner});
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
        startDate: string,
        endDate: string,
        price: string | undefined,
        goal: string | undefined,
        owner: string | undefined,
        tokenAddress: string | undefined,
    ): Promise<string> => {
        try {
            let startTime = Date.parse(startDate)/1000;
            let endTime = Date.parse(endDate)/1000;
            
            // const iSupply = ethers.utils.parseUnits(supply??'0', 18)
            let iOwner: any = owner;
            if(owner === '') {
                iOwner = account
            }
            const data = await crowdsaleContract?.getCrowdsaleInitData(auctionFactoryContract?.address,
                tokenAddress, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '1000000000000000000000',
                startTime, endTime, price, goal,
                iOwner, zero_address, iOwner);
            return data
        } catch (e) {
            return zero_data
        }
    }

    const getTokenFeeCost = async () => {
        try {
            // const fee =  await tokenFactoryContract?.minimumFee()
            // setTokenFeeCost(ethers.utils.formatUnits(fee, 18))
        } catch (e) {
            console.log(e)
            setTokenFeeCost('0')
        }
    }

    useEffect(() => {
        getTokenFeeCost()

    }, [account])

    return { createSale, getCrowdsaleData, getTokenFeeCost }
}

export default useHadesSale