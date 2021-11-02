import { ChainId } from 'hadeswap-beta-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
    [ChainId.MAINNET]: '0xAfE0C18dD5cef164e4437e86c868E37b5F167cBd',
    [ChainId.BSC]: '',
    [ChainId.MUMBAI]: '',
    [ChainId.SPARTA]: '0x2FEe127D8B98656BD1b76689E9076DC805055475'
}


export { MULTICALL_ABI, MULTICALL_NETWORKS }
