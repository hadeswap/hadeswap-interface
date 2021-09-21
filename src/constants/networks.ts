import { ChainId } from 'hadeswap-beta-sdk'
import Polis from '../assets/networks/polis.svg'

export const NETWORK_ICON = {
    [ChainId.MAINNET]: Polis,
    [ChainId.SPARTA]: Polis,
    [ChainId.BSC]: Polis,
    [ChainId.MUMBAI]: Polis,

}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
    [ChainId.MAINNET]: 'Olympus',
    [ChainId.SPARTA]: 'Sparta (testnet)'
}
