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
    // let tokenAddress = sara 
    // let tknTx = '0x2cf3d53581fb657d85a6b490ab47a3aee0506ed52859daa3df18bd5bdb499a29' // token

    const sara = '0x0AF4366C25c49C46b4816c42fEe25a0cf67dF2aB' // wallet
    const tokenAddress = '0xFF16E9a627B8cDb4cA72b6aD9508A62a5B1B121f' // token
    
    const tokenContract = useTokenContract(tokenAddress)
    const auctionFactoryContract = useAuctionFactoryContract()
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
                // step 2
                await tokenContract?.approve(auctionFactoryContract?.address, '10000000000000000000000000', {from: sara});

                // step 3
                let tid = await auctionFactoryContract?.getTemplateId(crowdsaleContract?.address);
                let data = await crowdsaleContract?.getCrowdsaleInitData(auctionFactoryContract?.address,
                                 tokenContract?.address, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', '1000000000000000000000',
                                 timestamp, timestamp5, '10000000000000000', '1000000000000000000',
                                 sara, zero_address, sara);
                console.log("data: ", data);                
                await tokenContract?.approve(auctionFactoryContract?.address, '10000000000000000000000000', {from: sara})
                console.log("try 4");
                let tx = await auctionFactoryContract?.createMarket(tid, tokenAddress, '1000000000000000000', zero_address, data, {from: sara});
                console.log("try 5");
                
                let crowdsaleAddress = tx.logs[0].args.addr; // create token, create market crea 
                console.log('crowdsaleAddress: ', crowdsaleAddress)

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

    return { createSale }
}

export default useHadesSale