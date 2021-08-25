import { ChainId, Currency, ETHER, Token } from 'hadeswap-beta-sdk'
import React, { useMemo } from 'react'

import AvalancheLogo from '../../assets/images/avalanche-logo.png'
import BinanceCoinLogo from '../../assets/images/binance-coin-logo.png'
import EthereumLogo from '../../assets/images/ethereum-logo.png'
import FantomLogo from '../../assets/images/fantom-logo.png'
import HarmonyLogo from '../../assets/images/harmony-logo.png'
import HecoLogo from '../../assets/images/heco-logo.png'
import Logo from '../Logo'
import MaticLogo from '../../assets/images/matic-logo.png'
import MoonbeamLogo from '../../assets/images/moonbeam-logo.png'
import OKExLogo from '../../assets/images/okex-logo.png'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import { getMaticTokenLogoURL } from '../../constants/maticTokenMapping'
import styled from 'styled-components'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import useHttpLocations from '../../hooks/useHttpLocations'
import xDaiLogo from '../../assets/images/xdai-logo.png'
import PolisLogo from '../../assets/networks/POLIS.svg'

const getTokenLogoURL = (address: string, chainId: any) => {
    let imageURL
    if (chainId === ChainId.MAINNET) {
        imageURL = `https://raw.githubusercontent.com/Aether-eum/assets/master/blockchains/sparta/assets/${address}/logo.png`
    }
    else {
        imageURL = `https://raw.githubusercontent.com/Aether-eum/assets/master/blockchains/sparta/assets/${address}/logo.png`
    }
    return imageURL
}

const StyledNativeCurrencyLogo = styled.img<{ size: string }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
    border-radius: 10px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    // border-radius: ${({ size }) => size};
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
    border-radius: 50%;
    // background-color: ${({ theme }) => theme.white};
`

const logo: { readonly [chainId in ChainId]?: string } = {
    [ChainId.MAINNET]: EthereumLogo,
    [ChainId.SPARTA]: PolisLogo
}

export default function CurrencyLogo({
    currency,
    size = '24px',
    style
}: {
    currency?: Currency
    size?: string
    style?: React.CSSProperties
}) {
    const { chainId } = useActiveWeb3React()
    const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

    const srcs: string[] = useMemo(() => {
        if (currency === ETHER) return []

        if (currency instanceof Token) {
            if (currency instanceof WrappedTokenInfo) {
                return [...uriLocations, getTokenLogoURL(currency.address, chainId)]
            }

            return [getTokenLogoURL(currency.address, chainId)]
        }
        return []
    }, [chainId, currency, uriLocations])

    if (currency === ETHER && chainId) {
        return <StyledNativeCurrencyLogo src={logo[chainId]} size={size} style={style} />
    }

    return <StyledLogo size={size} srcs={srcs} alt={`${currency?.getSymbol(chainId) ?? 'token'} logo`} style={style} />
}
