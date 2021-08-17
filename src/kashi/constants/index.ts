import { BigNumber } from '@ethersproject/bignumber'
import { ChainId } from 'hadeswap-beta-sdk'
import { ethers } from 'ethers'

// Functions that need accrue to be called
export const ACTION_ADD_ASSET = 1
export const ACTION_REPAY = 2
export const ACTION_REMOVE_ASSET = 3
export const ACTION_REMOVE_COLLATERAL = 4
export const ACTION_BORROW = 5
export const ACTION_GET_REPAY_SHARE = 6
export const ACTION_GET_REPAY_PART = 7
export const ACTION_ACCRUE = 8

// Functions that don't need accrue to be called
export const ACTION_ADD_COLLATERAL = 10
export const ACTION_UPDATE_EXCHANGE_RATE = 11

// Function on BentoBox
export const ACTION_BENTO_DEPOSIT = 20
export const ACTION_BENTO_WITHDRAW = 21
export const ACTION_BENTO_TRANSFER = 22
export const ACTION_BENTO_TRANSFER_MULTIPLE = 23
export const ACTION_BENTO_SETAPPROVAL = 24

// Any external call (except to BentoBox)
export const ACTION_CALL = 30

export const MINIMUM_TARGET_UTILIZATION = BigNumber.from('700000000000000000') // 70%

export const MAXIMUM_TARGET_UTILIZATION = BigNumber.from('800000000000000000') // 80%

export const UTILIZATION_PRECISION = BigNumber.from('1000000000000000000')

export const FULL_UTILIZATION = BigNumber.from('1000000000000000000')

export const FULL_UTILIZATION_MINUS_MAX = FULL_UTILIZATION.sub(MAXIMUM_TARGET_UTILIZATION)

export const STARTING_INTEREST_PER_YEAR = BigNumber.from(317097920)
    .mul(BigNumber.from(60))
    .mul(BigNumber.from(60))
    .mul(BigNumber.from(24))
    .mul(BigNumber.from(365)) // approx 1% APR

export const MINIMUM_INTEREST_PER_YEAR = BigNumber.from(79274480)
    .mul(BigNumber.from(60))
    .mul(BigNumber.from(60))
    .mul(BigNumber.from(24))
    .mul(BigNumber.from(365)) // approx 0.25% APR

export const MAXIMUM_INTEREST_PER_YEAR = BigNumber.from(317097920000)
    .mul(BigNumber.from(60))
    .mul(BigNumber.from(60))
    .mul(BigNumber.from(24))
    .mul(BigNumber.from(365)) // approx 1000% APR

export const INTEREST_ELASTICITY = BigNumber.from('28800000000000000000000000000000000000000') // Half or double in 28800 seconds (8 hours) if linear

export const FACTOR_PRECISION = BigNumber.from('1000000000000000000')

export const PROTOCOL_FEE = BigNumber.from('10000') // 10%

export const PROTOCOL_FEE_DIVISOR = BigNumber.from('100000')

// export const BENTOBOX_ADDRESS = '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'

export const BENTOBOX_ADDRESS: {
    [chainId in ChainId]: string
} = {
    [ChainId.MAINNET]: '',
    // [ChainId.ROPSTEN]: '',
    // [ChainId.RINKEBY]: '',
    [ChainId.SPARTA]: ''
}

export const KASHI_ADDRESS: {
    [chainId in ChainId]: string
} = {
    [ChainId.MAINNET]: '',
    // [ChainId.ROPSTEN]: '',
    // [ChainId.RINKEBY]: '',
    [ChainId.SPARTA]: ''
}

// export const KASHI_ADDRESS = '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42'

export const SUSHISWAP_SWAPPER_ADDRESS: {
    [chainId in ChainId]: string
} = {
    [ChainId.MAINNET]: '0x1766733112408b95239aD1951925567CB1203084',
    // [ChainId.ROPSTEN]: '',
    // [ChainId.RINKEBY]: '',
    [ChainId.SPARTA]: ''
}

export const SUSHISWAP_MULTISWAPPER_ADDRESS: {
    [chainId in ChainId]: string
} = {
    [ChainId.MAINNET]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
    // [ChainId.ROPSTEN]: '',
    // [ChainId.RINKEBY]: '',
    [ChainId.SPARTA]: ''
}

export const SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS = {
    [ChainId.MAINNET]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
    // [ChainId.ROPSTEN]: '',
    // [ChainId.RINKEBY]: '',
    [ChainId.SPARTA]: ''
}

export const PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564'

export const SUSHISWAP_TWAP_0_ORACLE_ADDRESS = '0x66F03B0d30838A3fee971928627ea6F59B236065'

export const SUSHISWAP_TWAP_1_ORACLE_ADDRESS = '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f'

export const CHAINLINK_ORACLE_ADDRESS = '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB'

export const BORING_HELPER_ADDRESS = {
    [ChainId.MAINNET]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
    // [ChainId.ROPSTEN]: '',
    // [ChainId.RINKEBY]: '',
    [ChainId.SPARTA]: '0xa06Be090fe91e811AA6fE81dFBf2c99AF6EeA90a'
}

// export const BORING_HELPER_ADDRESS = '0xa06Be090fe91e811AA6fE81dFBf2c99AF6EeA90a'

type Currency = { address: string; decimals: number }

// Pricing currency
// TODO: Check decimals and finish table
export const USD_CURRENCY: { [chainId in ChainId]?: Currency } = {
    [ChainId.MAINNET]: { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6 },
    // [ChainId.ROPSTEN]: { address: '0x516de3a7A567d81737e3a46ec4FF9cFD1fcb0136', decimals: 6 },
    // [ChainId.KOVAN]: { address: '0x07de306FF27a2B630B1141956844eB1552B956B5', decimals: 6 },
    // [ChainId.RINKEBY]: { address: '0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02', decimals: 6 },
    // [ChainId.GÖRLI]: { address: '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C', decimals: 6 },
    [ChainId.SPARTA]: { address: '0x808aCc5cF1576B01D28Fd89340174A8973FFA7C0', decimals: 18 }
}

export function getCurrency(chainId: ChainId | void): Currency {
    return USD_CURRENCY[chainId || 1] || { address: ethers.constants.AddressZero, decimals: 18 }
}

export * from './chainlink'
