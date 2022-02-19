import { BigNumber, Contract, ethers } from 'ethers'
import {
    useTokenFactoryContract,
    useAuctionFactoryContract,
    useTokenContract,
    useCrowdsaleContract
} from 'hooks/useContract'
import React, { useCallback } from 'react'
import useActiveWeb3React from './useActiveWeb3React'

const useHadesSale = () => {
    const auctionFactoryContract = useAuctionFactoryContract();
    const crowdsaleContract = useCrowdsaleContract();
    const { account } = useActiveWeb3React();

    const zero_address = '0x0000000000000000000000000000000000000000';
    const zero_data = '0x000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

    const createSale = useCallback(
        async (tid: string, tokenAddress: string, data: string, supply: string, owner: string | undefined) => {
            console.log('creating sale...')

            try {
                const iSupply = ethers.utils.parseUnits(supply??'0', 18) 
                const tx = await auctionFactoryContract?.createMarket(tid, tokenAddress, iSupply, zero_address, data, {from: owner});

                const tx_data = await tx.wait()
                // console.log('tx hash:\n   ', tx_data.transactionHash)
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
        supply: string | undefined,
    ): Promise<string> => {
        try {
            const startTime = Math.floor(Date.parse(startDate) / 1000) + 100;
            const endTime = Math.floor(Date.parse(endDate) / 1000);
            // const startTime = Math.floor(Date.now() / 1000) + 100;
            // const endTime = Math.floor(Date.now() / 1000) + 1000;
            const iSupply = ethers.utils.parseUnits(supply??'0', 18) 
            const iPrice = ethers.utils.parseUnits(price??'0', 18);
            const iGoal = ethers.utils.parseUnits(goal??'0', 18);
            let iOwner: any = owner;
            if(owner === '') {
                iOwner = account
            }

            // await crowdsaleContract?.approve(auctionFactoryContract?.address, '10000000000000000000000000', {from: owner});
            const data = await crowdsaleContract?.getCrowdsaleInitData(auctionFactoryContract?.address,
                tokenAddress, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', iSupply,
                startTime, endTime, iPrice, iGoal,
                iOwner, zero_address, iOwner);

            return data
        } catch (e) {
            return zero_data
        }
    }

    // const getTokenFeeCost = async () => {
    //     try {
    //         const fee =  await tokenFactoryContract?.minimumFee()
    //         setTokenFeeCost(ethers.utils.formatUnits(fee, 18))
    //     } catch (e) {
    //         console.log(e)
    //         setTokenFeeCost('0')
    //     }
    // }

    return { createSale, getCrowdsaleData }
}

export default useHadesSale