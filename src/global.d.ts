import { BigNumber } from '@ethersproject/bignumber'

interface TokenType {
    address?: string | null,
    template?: string | null,
    amount?: string | null,
}

declare global {
    interface String {
        toBigNumber(decimals: number): BigNumber
    }
    var token = TokenType
}
