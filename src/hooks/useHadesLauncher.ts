import { Contract, ethers } from 'ethers'
import {
    useTokenFactoryContract,
    useAuctionFactoryContract,
    useLiquidityFactoryContract,
    useTokenTemplateContract
} from 'hooks/useContract'
import { useCallback } from 'react'
import { useTransactionAdder } from '../state/transactions/hooks'
import useActiveWeb3React from './useActiveWeb3React'

const useHadesLauncher = () => {
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
                console.log('token address', tx_data)
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


    return { createToken, getTokenData }
}

export default useHadesLauncher
