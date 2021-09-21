import { ChainId, Currency, JSBI, Price, WETH, currencyEquals } from 'hadeswap-beta-sdk'
import { useMemo } from 'react'
import { DAI } from '../constants'
import { PairState, usePairs } from '../data/Reserves'
import { useActiveWeb3React } from '../hooks/useActiveWeb3React'
import { wrappedCurrency } from '../utils/wrappedCurrency'

/**
 * Returns the price in USDC of the input currency
 * @param currency currency to compute the USDC price of
 */
export default function useUSDCPrice(currency?: Currency): Price | undefined {
    const { chainId } = useActiveWeb3React()
    const wrapped = wrappedCurrency(currency, chainId)
    const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
        () => [
            [
                chainId && wrapped && currencyEquals(WETH[chainId], wrapped) ? undefined : currency,
                chainId ? WETH[chainId] : undefined
            ],
            [wrapped?.equals(DAI) ? undefined : wrapped, chainId === ChainId.MAINNET ? DAI : undefined],
            [chainId ? WETH[chainId] : undefined, chainId === ChainId.MAINNET ? DAI : undefined]
        ],
        [chainId, currency, wrapped]
    )
    const [[ethPairState, ethPair], [usdcPairState, usdcPair], [usdcEthPairState, usdcEthPair]] = usePairs(tokenPairs)

    return useMemo(() => {
        if (!currency || !wrapped || !chainId) {
            return undefined
        }
        // handle weth/eth
        if (wrapped.equals(WETH[chainId])) {
            if (usdcPair) {
                const price = usdcPair.priceOf(WETH[chainId])
                return new Price(currency, DAI, price.denominator, price.numerator)
            } else {
                return undefined
            }
        }
        // handle usdc
        if (wrapped.equals(DAI)) {
            return new Price(DAI, DAI, '1', '1')
        }

        const ethPairETHAmount = ethPair?.reserveOf(WETH[chainId])
        const ethPairETHUSDCValue: JSBI =
            ethPairETHAmount && usdcEthPair
                ? usdcEthPair.priceOf(WETH[chainId]).quote(ethPairETHAmount).raw
                : JSBI.BigInt(0)

        // all other tokens
        // first try the usdc pair
        if (
            usdcPairState === PairState.EXISTS &&
            usdcPair &&
            usdcPair.reserveOf(DAI).greaterThan(ethPairETHUSDCValue)
        ) {
            const price = usdcPair.priceOf(wrapped)
            return new Price(currency, DAI, price.denominator, price.numerator)
        }
        if (ethPairState === PairState.EXISTS && ethPair && usdcEthPairState === PairState.EXISTS && usdcEthPair) {
            if (usdcEthPair.reserveOf(DAI).greaterThan('0') && ethPair.reserveOf(WETH[chainId]).greaterThan('0')) {
                const ethUsdcPrice = usdcEthPair.priceOf(DAI)
                const currencyEthPrice = ethPair.priceOf(WETH[chainId])
                const usdcPrice = ethUsdcPrice.multiply(currencyEthPrice).invert()
                return new Price(currency, DAI, usdcPrice.denominator, usdcPrice.numerator)
            }
        }
        return undefined
    }, [chainId, currency, ethPair, ethPairState, usdcEthPair, usdcEthPairState, usdcPair, usdcPairState, wrapped])
}
