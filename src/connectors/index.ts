import { ChainId } from 'hadeswap-beta-sdk'
import { FortmaticConnector } from './Fortmatic'
import { InjectedConnector } from '@web3-react/injected-connector'
import { LatticeConnector } from '@web3-react/lattice-connector'
import { NetworkConnector } from './NetworkConnector'
import { PortisConnector } from '@web3-react/portis-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { Web3Provider } from '@ethersproject/providers'
// import { BscConnector } from '@binance-chain/bsc-connector'

const RPC = {
    [ChainId.MAINNET]: 'https://rpc.polis.tech/',
    // [ChainId.ROPSTEN]: 'https://eth-ropsten.alchemyapi.io/v2/cidKix2Xr-snU3f6f6Zjq_rYdalKKHmW',
    // [ChainId.RINKEBY]: 'https://eth-rinkeby.alchemyapi.io/v2/XVLwDlhGP6ApBXFz_lfv0aZ6VmurWhYD',
    [ChainId.SPARTA]: 'https://sparta-rpc.polis.tech'
}

export const network = new NetworkConnector({
    defaultChainId: 333999,
    urls: RPC
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
    return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({
    supportedChainIds: [
        333999, // mainnet
        333888 //sparta
    ]
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
    rpc: {
        [ChainId.MAINNET]: RPC[ChainId.MAINNET]
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 15000
})

// mainnet only
export const lattice = new LatticeConnector({
    chainId: 1,
    url: RPC[ChainId.MAINNET],
    appName: 'Hadeswap'
})

// mainnet only
export const fortmatic = new FortmaticConnector({
    apiKey: process.env.REACT_APP_FORTMATIC_API_KEY ?? '',
    chainId: 1
})

// mainnet only
export const portis = new PortisConnector({
    dAppId: process.env.REACT_APP_PORTIS_ID ?? '',
    networks: [1]
})

// mainnet only
export const walletlink = new WalletLinkConnector({
    url: RPC[ChainId.SPARTA],
    appName: 'Hadeswap',
    appLogoUrl: 'https://raw.githubusercontent.com/sushiswap/art/master/sushi/logo-256x256.png'
})

// mainnet only
export const torus = new TorusConnector({
    chainId: 1
})

// export const bsc = new BscConnector({ supportedChainIds: [56] })
