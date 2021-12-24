import { ChainId } from 'hadeswap-beta-sdk'
import Polis from '../assets/networks/polis.svg'
import Iotex from '../assets/networks/iotex.png'

export const NETWORK_ICON = {
    [ChainId.MAINNET]: Polis,
    [ChainId.SPARTA]: Polis,
    [ChainId.BSC]: Polis,
    [ChainId.MUMBAI]: Polis,
    [ChainId.FANTOM]: Polis,
    [ChainId.ETHEREUM]: Polis,
    [ChainId.MATIC]: Polis,
    [ChainId.IOTEX]: Iotex
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
    [ChainId.MAINNET]: 'Olympus',
    [ChainId.SPARTA]: 'Sparta (testnet)',
    [ChainId.IOTEX]: 'IoTeX'
}
