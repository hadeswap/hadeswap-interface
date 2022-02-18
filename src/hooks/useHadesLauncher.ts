import { BigNumber, Contract, ethers } from 'ethers'
import {
    useTokenFactoryContract,
    useAuctionFactoryContract,
    useLiquidityFactoryContract,
    useTokenTemplateContract
} from 'hooks/useContract'
import React, { useCallback, useEffect, useState } from 'react'
import { useTransactionAdder } from '../state/transactions/hooks'
import useActiveWeb3React from './useActiveWeb3React'

const useHadesLauncher = () => {
    const [tokenFeeCost, setTokenFeeCost] = useState('0');
    const addTransaction = useTransactionAdder()
    const tokenFactoryContract = useTokenFactoryContract()
    const tokenContract = useTokenTemplateContract()
    const auctionFactoryContract = useAuctionFactoryContract()
    const liquidityFactoryContract = useLiquidityFactoryContract()
    const {account} = useActiveWeb3React()

    const zero_address = '0x0000000000000000000000000000000000000000';
    const zero_data = '0x000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';


    // Create Token
    const createToken = useCallback(
        async (tid: string , data: string, name: string, symbol: string) => {
            console.log('creating...', tid, data, name, symbol)
            try {
                const feeCost = await tokenFactoryContract?.minimumFee()
                const tx = await tokenFactoryContract?.createToken(tid, zero_address, data, {value: feeCost})
                const receipt =  addTransaction(tx, { summary: `Created Token ${symbol}` })
                // wait 1 block to get the created token address
                const tx_data = await tx.wait()
                console.log('tx', tx_data)
                return tx_data
            } catch (e) {
                console.error(e)
                return undefined
            }
        },
        [addTransaction, tokenFactoryContract]
    )

    const getTokenData = async (
        name: string | null | undefined,
        symbol: string | undefined,
        owner: string | null | undefined,
        supply: string | undefined,
    ): Promise<string> => {
        try {
            const iSupply = ethers.utils.parseUnits(supply??'0', 18)
            let iOwner: any = owner;
            if(owner === '') {
                iOwner = account
            }
            return await tokenContract?.getInitData(name, symbol, iOwner, iSupply)
        } catch (e) {
            return zero_data
        }
    }

    const getTokenFeeCost = async (
    ) => {
        try {
            const fee =  await tokenFactoryContract?.minimumFee()
            setTokenFeeCost(ethers.utils.formatUnits(fee, 18))
        } catch (e) {
            console.log(e)
            setTokenFeeCost('0')
        }
    }

    const createLauncher = useCallback(
        async (owner: string | undefined, tokenAddress: string, crowdsaleAddress: string) => {
        // async (tid: string , data: string, name: string, symbol: string) => {
            // console.log('creating...', tid, data, name, symbol)
            try {
                // STEP: Approve to liquidityFactory
                await token.approve(liquidityFactoryContract?.address, '10000000000000000000000000', {from: owner});
                
                // console.log((await token.balance).toString());

                // STEP: Create Launcher
                // get template id
                const tid = await liquidityFactoryContract?.getTemplateId(postauctionlauncher.address);
                console.log("launcher template id: ", tid.toString());
                // get init data
                
                // create
                const tx = await liquidityFactoryContract?.createLauncher(tid, tokenAddress, '1000000000000000000000', zero_address, data, {from: owner});
                let launcherAddress = tx.logs[0].args.addr;
                console.log('2', (await token.balanceOf(divi)).toString() )

                const tx_data = await tx.wait()
                console.log('tx', tx_data)
                return tx_data
            } catch (e) {
                console.error('createLauncher::ERROR: ', e)
                return undefined
            }
        },
        []
    )

    const getLauncherData = async (
        owner: string | null | undefined,
        crowdsaleAddress: string,
    ): Promise<string> => {
        try {
            let iOwner: any = owner;
            if(owner === '') {
                iOwner = account
            }
            const data = await postauctionlauncher.getLauncherInitData(crowdsaleAddress, factory.address, iOwner, iOwner, 900, 1000);
            // await token.approve(liquidityFactoryContract, '1000000000000000000', {from: iOwner})
            return data
        } catch (e) {
            return zero_data
        }
    }

    useEffect(() => {
        getTokenFeeCost()

    }, [account, tokenFactoryContract])


    return { createToken, getTokenData, tokenFeeCost }
}

export default useHadesLauncher
