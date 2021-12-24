import { ChainId } from 'hadeswap-beta-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
    [ChainId.MAINNET]: '0xAfE0C18dD5cef164e4437e86c868E37b5F167cBd',
    [ChainId.BSC]: '',
    [ChainId.MUMBAI]: '',
    [ChainId.SPARTA]: '0x2FEe127D8B98656BD1b76689E9076DC805055475',
    [ChainId.ETHEREUM]: '',
    [ChainId.FANTOM]: '',
    [ChainId.MATIC]: '',
    [ChainId.IOTEX]: '0x61Cb0AdEd6fb3722cf79A0ebC54E861306f202EA'
}


export { MULTICALL_ABI, MULTICALL_NETWORKS }
