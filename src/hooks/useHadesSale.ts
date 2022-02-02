import { BigNumber, Contract, ethers } from 'ethers'
import {
    useTokenFactoryContract,
    useAuctionFactoryContract,
    useTokenContract,
    useCrowdsaleContract
} from 'hooks/useContract'
import React, { useCallback, useEffect, useState } from 'react'
import { useTransactionAdder } from '../state/transactions/hooks'
import useActiveWeb3React from './useActiveWeb3React'
import { CROWDSALE_TEMPLATE } from '../constants'

// const useHadesSale = (tokenAddress: string) => {
const useHadesSale = () => {
    // const [approval, approveCallback] = useApproveCallback(independentAmount, TOKEN_FACTORY_ADDRESS)
    let tokenAddress = '0x201452d9d2a5f37316cae5c9dd625bcab702a3d0706d08095ee7fe29d43a3242'
    const tokenFactoryContract = useTokenFactoryContract()
    const tokenContract = useTokenContract(tokenAddress)
    const auctionFactoryContract = useAuctionFactoryContract()
    const {account} = useActiveWeb3React()
    const crowdsaleContract = useCrowdsaleContract();

    const zero_address = '0x0000000000000000000000000000000000000000';
    const zero_data = '0x000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

    // Create Sale
    const createSale = useCallback(
        async () => {
            console.log('creating sale...')
            let timestamp = Math.floor(Date.now() / 1000) + 100;
            let timestamp5 = Math.floor(Date.now() / 1000) + 1000;

            try {
                await tokenContract?.approve(auctionFactoryContract?.address, '10000000000000000000000000', {from: 'carol'});
                let data = await crowdsaleContract?.getCrowdsaleInitData(auctionFactoryContract?.address,
                                 tokenAddress, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '1000000000000000000000',
                                 timestamp, timestamp5, '10000000000000000', '1000000000000000000',
                                 'carol', zero_address, 'carol');
                await tokenContract?.approve((auctionFactoryContract?.address, '1000000000000000000', {from: 'carol'}))
                
                let tx = await auctionFactoryContract?.createMarket(tokenAddress, '1000000000000000000000', zero_address, data, {from: 'carol'});
                let crowdsaleAddress = tx.logs[0].args.addr; //create token, create market crea 
                console.log('crowdsaleAddress', crowdsaleAddress)

                const tx_data = await tx.wait()
                console.log('tx', tx_data)
                return tx_data
            } catch (e) {
                console.error("createSale::useCallback error: ", e)
                return undefined
            }
        },
        [tokenFactoryContract]
    )

    return { createSale }
}

export default useHadesSale