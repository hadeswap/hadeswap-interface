import Arbitrum from '../assets/networks/arbitrum-network.jpg'
import Avalanche from '../assets/networks/avalanche-network.jpg'
import Bsc from '../assets/networks/bsc-network.jpg'
import { ChainId } from 'hadeswap-beta-sdk'
import Fantom from '../assets/networks/fantom-network.jpg'
import Goerli from '../assets/networks/goerli-network.jpg'
import Harmony from '../assets/networks/harmonyone-network.jpg'
import Heco from '../assets/networks/heco-network.jpg'
import Kovan from '../assets/networks/kovan-network.jpg'
import Mainnet from '../assets/networks/mainnet-network.jpg'
import Matic from '../assets/networks/matic-network.jpg'
import Moonbeam from '../assets/networks/moonbeam-network.jpg'
import OKEx from '../assets/networks/okex-network.jpg'
import Polygon from '../assets/networks/polygon-network.jpg'
import Rinkeby from '../assets/networks/rinkeby-network.jpg'
import Ropsten from '../assets/networks/ropsten-network.jpg'
import xDai from '../assets/networks/xdai-network.jpg'
import Polis from '../assets/networks/POLIS.svg'

export const NETWORK_ICON = {
    [ChainId.MAINNET]: Mainnet,
    // [ChainId.ROPSTEN]: Ropsten,
    // [ChainId.RINKEBY]: Rinkeby,
    [ChainId.SPARTA]: Polis
}

export const NETWORK_LABEL: { [chainId in ChainId]?: string } = {
    [ChainId.MAINNET]: 'Ethereum',
    // [ChainId.RINKEBY]: 'Rinkeby',
    // [ChainId.ROPSTEN]: 'Ropsten',
    [ChainId.SPARTA]: 'Polis'
}
