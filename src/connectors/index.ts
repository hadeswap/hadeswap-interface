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
        333888,
        1,
        56,
        137,
        250
    ]
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
    rpc: {
        [ChainId.MAINNET]: RPC[ChainId.MAINNET]
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
})

// mainnet only
export const lattice = new LatticeConnector({
    chainId: 1,
    url: RPC[ChainId.MAINNET],
    appName: 'Hades Swap'
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
    url: RPC[ChainId.MAINNET],
    appName: 'Hades Swap',
    appLogoUrl: 'https://raw.githubusercontent.com/hadeswap/assets/master/blockchains/olympus/assets/0xf1498e8103359fD96c5E08fb34b4C249B619025a/logo.png'
})

// mainnet only
export const torus = new TorusConnector({
    chainId: 1
})

// export const bsc = new BscConnector({ supportedChainIds: [56] })
