import { ChainId, JSBI, Percent, Token, WETH } from 'hadeswap-beta-sdk'
import { injected, walletconnect } from '../connectors'

import { AbstractConnector } from '@web3-react/abstract-connector'


export const BORING_HELPER_ADDRESS = {
    [ChainId.MAINNET]: '0x583196C63539173851DAd3A02424c9fEB5bF9dD4',
    [ChainId.SPARTA]: '0x0A8aAC4F84277775bAA9fE6be58fE402B97b847a',
    [ChainId.BSC]: '',
    [ChainId.MUMBAI]: '',
    [ChainId.ETHEREUM]: '',
    [ChainId.MATIC]: '',
    [ChainId.FANTOM]: '',
    [ChainId.IOTEX]: ''
}

// a list of tokens by chain
type ChainTokenList = {
    readonly [chainId in ChainId]: Token[]
}

type ChainTokenMap = {
    readonly [chainId in ChainId]?: Token
}


// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 13
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

export const ACTIVE_NETWORKS = {
    [ChainId.MAINNET.toString()]: true,
    [ChainId.IOTEX.toString()]: true,
    [ChainId.BSC.toString()]: false,
    [ChainId.MUMBAI.toString()]: false,
    [ChainId.SPARTA.toString()]: false,
    [ChainId.FANTOM.toString()]: false,
    [ChainId.ETHEREUM.toString()]: false,
    [ChainId.MATIC.toString()]: false,
    undefined: false
}

// POLIS
export const SOUL: ChainTokenMap = {
    [ChainId.SPARTA]: new Token(
        ChainId.SPARTA,
        '0xc9Ec2EDD1BA38918a55B5ab637dd0Ac02e6e4058',
        18,
        'SOUL',
        'SoulToken'
    ),
    [ChainId.MAINNET]: new Token(
        ChainId.MAINNET,
        '0xf1498e8103359fD96c5E08fb34b4C249B619025a',
        18,
        'SOUL',
        'SoulToken'
    ),
}


// TODO: SDK should have two maps, WETH map and WNATIVE map.
const WRAPPED_NATIVE_ONLY: ChainTokenList = {
    [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
    [ChainId.BSC]: [WETH[ChainId.BSC]],
    [ChainId.MUMBAI]: [WETH[ChainId.MUMBAI]],
    [ChainId.SPARTA]: [WETH[ChainId.SPARTA]],
    [ChainId.FANTOM]: [WETH[ChainId.FANTOM]],
    [ChainId.ETHEREUM]: [WETH[ChainId.ETHEREUM]],
    [ChainId.MATIC]: [WETH[ChainId.MATIC]],
    [ChainId.IOTEX]: [WETH[ChainId.IOTEX]],
}

// Default Ethereum chain tokens
export const DAI = new Token(ChainId.MAINNET, '0x247123e806a27Ea322bFd93e0273D04602dC942D', 18, 'DAI', 'Dai Stablecoin')

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
    ...WRAPPED_NATIVE_ONLY,
    [ChainId.MAINNET]: [...WRAPPED_NATIVE_ONLY[ChainId.MAINNET], DAI],
}

export const XSUSHI_CALL = new Token(
    ChainId.MAINNET,
    '0xada279f9301C01A4eF914127a6C2a493Ad733924',
    18,
    'XSUc25-0531',
    'XSOUL 25 Call [31 May 2021]'
)

export const XSOUL = new Token(ChainId.MAINNET, '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272', 18, 'xSUSHI', 'SoulBar')

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
    [ChainId.MAINNET]: {
        [XSUSHI_CALL.address]: [XSOUL, WETH[ChainId.MAINNET]]
    }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
    ...WRAPPED_NATIVE_ONLY,
    [ChainId.MAINNET]: [...WRAPPED_NATIVE_ONLY[ChainId.MAINNET], DAI],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
    ...WRAPPED_NATIVE_ONLY,
    [ChainId.MAINNET]: [...WRAPPED_NATIVE_ONLY[ChainId.MAINNET], DAI],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
    [ChainId.MAINNET]: [
        [SOUL[ChainId.MAINNET] as Token, WETH[ChainId.MAINNET]],
        [SOUL[ChainId.MAINNET] as Token, DAI],
        [DAI, WETH[ChainId.MAINNET]]
    ]
}

export interface WalletInfo {
    connector?: AbstractConnector
    name: string
    iconName: string
    description: string
    href: string | null
    color: string
    primary?: true
    mobile?: true
    mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
    INJECTED: {
        connector: injected,
        name: 'Injected',
        iconName: 'arrow-right.svg',
        description: 'Injected web3 provider.',
        href: null,
        color: '#010101',
        primary: true
    },
    METAMASK: {
        connector: injected,
        name: 'MetaMask',
        iconName: 'metamask.png',
        description: 'Easy-to-use browser extension.',
        href: null,
        color: '#E8831D'
    },
    WALLET_CONNECT: {
        connector: walletconnect,
        name: 'WalletConnect',
        iconName: 'walletConnectIcon.svg',
        description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
        href: null,
        color: '#4196FC',
        mobile: true
    },
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [

]

export const ANALYTICS_URL: { [chainId in ChainId]?: string } = {
    [ChainId.SPARTA]: 'https://analytics.hadesswap.finance/',
    [ChainId.MAINNET]: 'https://analytics.hadesswap.finance/',

}


// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
    [ChainId.MAINNET]: '0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982',
    // [ChainId.ROPSTEN]: '0x84d1f7202e0e7dac211617017ca72a2cb5e2b955'
}