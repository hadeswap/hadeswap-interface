import {
    ARGENT_WALLET_DETECTOR_ABI,
    ARGENT_WALLET_DETECTOR_MAINNET_ADDRESS
} from '../constants/abis/argent-wallet-detector'
import {
    ChainId,
    FACTORY_ADDRESS,
    MASTERCHEF_ADDRESS,
    ROUTER_ADDRESS,
    TIMELOCK_ADDRESS,
    WETH
} from 'hadeswap-beta-sdk'

import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../constants/multicall'

import { Contract } from '@ethersproject/contracts'
import BORING_HELPER_ABI from '../constants/abis/boring-helper.json'
import ENS_ABI from '../constants/abis/ens-registrar.json'
import ENS_PUBLIC_RESOLVER_ABI from '../constants/abis/ens-public-resolver.json'
import ERC20_ABI from '../constants/abis/erc20.json'
import { ERC20_BYTES32_ABI } from '../constants/abis/erc20'
import FACTORY_ABI from '../constants/abis/factory.json'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import MASTERCHEF_ABI from '../constants/abis/masterchef.json'
import MINICHEFV2_ABI from '../constants/abis/miniChefV2.json'
import ROUTER_ABI from '../constants/abis/router.json'
import TIMELOCK_ABI from '../constants/abis/timelock.json'
import WETH_ABI from '../constants/abis/weth.json'
import { getContract } from '../utils'
import { useActiveWeb3React } from './useActiveWeb3React'
import { useMemo } from 'react'
import { BORING_HELPER_ADDRESS } from '../constants'

// returns null on errors
export function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
    const { library, account } = useActiveWeb3React()

    return useMemo(() => {
        if (!address || !ABI || !library) return null
        try {
            return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [address, ABI, library, withSignerIfPossible, account])
}


export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useArgentWalletDetectorContract(): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(
        chainId === ChainId.MAINNET ? ARGENT_WALLET_DETECTOR_MAINNET_ADDRESS : undefined,
        ARGENT_WALLET_DETECTOR_ABI,
        false
    )
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
    const { chainId } = useActiveWeb3React()
    let address: string | undefined
    if (chainId) {
        switch (chainId) {
            case ChainId.MAINNET:
                break;
        }
    }
    return useContract(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
    return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(pairAddress, IUniswapV2PairABI, withSignerIfPossible)
}


export function useMulticallContract(): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false)
}


export function useMasterChefContract(withSignerIfPossible?: boolean): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && MASTERCHEF_ADDRESS[chainId], MASTERCHEF_ABI, withSignerIfPossible)
}

export function useMiniChefV2Contract(withSignerIfPossible?: boolean): Contract | null {
    const { chainId } = useActiveWeb3React()
    let address: string | undefined
    if (chainId) {
        switch (chainId) {
            case ChainId.MAINNET:
                address = '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F'
                break
        }
    }
    return useContract(address, MINICHEFV2_ABI, withSignerIfPossible)
}

export function useFactoryContract(): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && FACTORY_ADDRESS[chainId], FACTORY_ABI, false)
}

export function useRouterContract(): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && ROUTER_ADDRESS[chainId], ROUTER_ABI, false)
}

export function useTimelockContract(): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && TIMELOCK_ADDRESS[chainId], TIMELOCK_ABI, false)
}

export function useBoringHelperContract(): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && BORING_HELPER_ADDRESS[chainId], BORING_HELPER_ABI, false)
}
