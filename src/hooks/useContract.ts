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
import {
    BENTOBOX_ADDRESS,
    BORING_HELPER_ADDRESS,
    CHAINLINK_ORACLE_ADDRESS,
    KASHI_ADDRESS,
    SUSHISWAP_MULTISWAPPER_ADDRESS,
    SUSHISWAP_SWAPPER_ADDRESS,
    SUSHISWAP_TWAP_0_ORACLE_ADDRESS,
    SUSHISWAP_TWAP_1_ORACLE_ADDRESS
} from 'kashi'
import { MERKLE_DISTRIBUTOR_ADDRESS, SOUL } from '../constants'
import { MIGRATOR_ABI, MIGRATOR_ADDRESS } from '../constants/abis/migrator'
import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../constants/multicall'
// import { V1_EXCHANGE_ABI, V1_FACTORY_ABI, V1_FACTORY_ADDRESSES } from '../constants/v1'

// import BASE_SWAPPER_ABI from '../constants/abis/swapper.json'
import BENTOBOX_ABI from '../constants/abis/bentobox.json'
import BORING_HELPER_ABI from '../constants/abis/boring-helper.json'
import CHAINLINK_ORACLE_ABI from '../constants/abis/chainlink-oracle.json'
import { Contract } from '@ethersproject/contracts'
import DASHBOARD2_ABI from '../constants/abis/dashboard2.json'
import DASHBOARD_ABI from '../constants/abis/dashboard.json'
import ENS_ABI from '../constants/abis/ens-registrar.json'
import ENS_PUBLIC_RESOLVER_ABI from '../constants/abis/ens-public-resolver.json'
import ERC20_ABI from '../constants/abis/erc20.json'
import { ERC20_BYTES32_ABI } from '../constants/abis/erc20'
import FACTORY_ABI from '../constants/abis/factory.json'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import KASHIPAIR_ABI from '../constants/abis/kashipair.json'
import MAKER_ABI from '../constants/abis/maker.json'
import MASTERCHEF_ABI from '../constants/abis/masterchef.json'
import { abi as MERKLE_DISTRIBUTOR_ABI } from '@uniswap/merkle-distributor/build/MerkleDistributor.json'
import MINICHEFV2_ABI from '../constants/abis/miniChefV2.json'
import PENDING_ABI from '../constants/abis/pending.json'
import ROUTER_ABI from '../constants/abis/router.json'
import SAAVE_ABI from '../constants/abis/saave.json'
import { abi as STAKING_REWARDS_ABI } from '@uniswap/liquidity-staker/build/StakingRewards.json'
import SUSHIROLL_ABI from '@sushiswap/core/abi/SushiRoll.json'
import SUSHISWAP_MULTISWAPPER_ABI from '../constants/abis/sushiswapmultiswapper.json'
import SUSHISWAP_TWAP_ORACLE_ABI from '../constants/abis/sushiswap-slp-oracle.json'
import SUSHI_ABI from '../constants/abis/sushi.json'
import TIMELOCK_ABI from '../constants/abis/timelock.json'
import { abi as UNI_ABI } from '@uniswap/governance/build/Uni.json'
import { abi as UNI_FACTORY_ABI } from '@uniswap/v2-core/build/UniswapV2Factory.json'
import { FACTORY_ADDRESS as UNI_FACTORY_ADDRESS } from '@uniswap/sdk'
import WETH_ABI from '../constants/abis/weth.json'
import { getContract } from '../utils'
import { useActiveWeb3React } from './useActiveWeb3React'
import { useMemo } from 'react'

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
            // case ChainId.GÖRLI:
            // case ChainId.ROPSTEN:
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

export function useBentoBoxContract(withSignerIfPossible?: boolean): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && BENTOBOX_ADDRESS[chainId], BENTOBOX_ABI, withSignerIfPossible)
}

export function useBoringHelperContract(): Contract | null {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && BORING_HELPER_ADDRESS[chainId], BORING_HELPER_ABI, false)
}

export function useSushiSwapTWAP0Oracle(): Contract | null {
    return useContract(SUSHISWAP_TWAP_0_ORACLE_ADDRESS, SUSHISWAP_TWAP_ORACLE_ABI)
}

export function useSushiSwapTWAP1Oracle(): Contract | null {
    return useContract(SUSHISWAP_TWAP_1_ORACLE_ADDRESS, SUSHISWAP_TWAP_ORACLE_ABI)
}
