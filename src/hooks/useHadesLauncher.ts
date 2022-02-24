import { BigNumber, Contract, ethers } from 'ethers'
import {
    useTokenFactoryContract,
    useAuctionFactoryContract,
    useLiquidityFactoryContract,
    useLiquidityLauncherContract,
    useTokenContract
} from './useContract'
import React, { useCallback, useEffect, useState } from 'react'
import { useTransactionAdder } from '../state/transactions/hooks'
import useActiveWeb3React from './useActiveWeb3React'

const useHadesLauncher = () => {
    const tokenContract = useTokenContract('0x74Eb00a3631096d2DBC4a9bE1f6A24B89cFF6340')
    const postauctionlauncher = useLiquidityLauncherContract()
    const liquidityFactoryContract = useLiquidityFactoryContract()
    const { account } = useActiveWeb3React()

    const zero_address = '0x0000000000000000000000000000000000000000';
    const zero_data = '0x000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';


    // const createLauncher = useCallback(
        // async (owner: string | undefined, supply: string, tokenAddress: string, data: string) => {
        //     console.log('creating launcher...')
        //     console.log('owner: ', owner);
        //     console.log('supply: ', supply);
        //     console.log('tokenAddress: ', tokenAddress);
        //     console.log('data: ', data);
            
        //     try {                
        //         // STEP: Approve to liquidityFactory
        //         // await tokenContract?.approve('0xA0781fba8D24550e18D55b4fcd02B9C23fB20445', '10000000000000000000000000', {from: iOwner});
                
        //         // const iSupply = ethers.utils.parseUnits(supply??'0', 18)
        //         // let iOwner: any = owner;
        //         // if(owner === '') {
        //         //     iOwner = account
        //         // }
        //         // const tid = await liquidityFactoryContract?.getTemplateId(postauctionlauncher?.address);
        //         // console.log("launcher template id: ", tid.toString());

        //         // // const tx = await liquidityFactoryContract?.createLauncher(tid, tokenAddress, iSupply, zero_address, data, {from: iOwner});
        //         // const tx = await liquidityFactoryContract?.createLauncher(tid, tokenAddress, '1000000000000000000000', zero_address, data, {from: iOwner});
        //         // const launcherAddress = tx.transactionHash;
        //         // console.log('launcherAddress: ', launcherAddress);
        //         // // console.log('2', (await tokenContract.balanceOf(divi)).toString() )

        //         // const tx_data = await tx.wait()
        //         // console.log('createLauncher tx', tx_data)
        //         // return tx_data
        //         const tid = await liquidityFactoryContract?.getTemplateId(postauctionlauncher?.address);
        //         console.log("launcher template id: ", tid.toString());
        //         const tx = await liquidityFactoryContract?.createLauncher(tid, tokenAddress, '1000000000000000000000', zero_address, data, {from: owner});
        //         const launcherAddress = tx.logs[0].args.addr;
        //         return undefined
        //     } catch (e) {
        //         console.error('createLauncher::ERROR: ', e)
        //         return undefined
        //     }
        // },
        // []
    // )

    const getLauncherData = async (
        owner: string | null | undefined,
        crowdsaleAddress: string,
        percent: number,
        locktime: number,
    ): Promise<string> => {
        try {
            let iOwner: any = owner;
            if(owner === '') {
                iOwner = account
            }
            const data = await postauctionlauncher?.getLauncherInitData(crowdsaleAddress, '0x4523ad2e05c455d0043910c84c83236a6c98b40b', iOwner, iOwner, 900, 1000);
            // await token.approve(liquidityFactoryContract, '1000000000000000000', {from: iOwner})
            return data
        } catch (e) {
            return zero_data
        }
    }

    return { getLauncherData }
}

export default useHadesLauncher
