import { MenuFlyout, StyledMenu, StyledMenuButton } from 'components/StyledMenu'
import React, { memo, useRef } from 'react'
import styled from 'styled-components'
import BscNet from '../../assets/networks/bsc-network.jpg'
import PolisNet from '../../assets/networks/polis.svg'
import MumbaiNet from '../../assets/networks/polis.svg'
import MainNet from '../../assets/networks/polis.svg'
import { ReactComponent as DropDown } from '../../assets/images/dropdown.svg'

import { Currency, ChainId } from 'hadeswap-beta-sdk'
import { NETWORK_ICON, NETWORK_LABEL } from '../../constants/networks'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useNetworkModalToggle, useToggleModal } from '../../state/application/hooks'

import { useLingui } from '@lingui/react'
import { classNames } from '../../functions'


export const PARAMS: {
    [chainId in ChainId]?: {
        chainId: string
        chainName: string
        nativeCurrency: {
            name: string
            symbol: string
            decimals: number
        }
        rpcUrls: string[]
        blockExplorerUrls: string[]
    }
} = {
    [ChainId.MAINNET]: {
        chainId: '0x518AF',
        chainName: 'Olympus',
        nativeCurrency: {
            name: 'Polis',
            symbol: 'POLIS',
            decimals: 18
        },
        rpcUrls: ['https://rpc.polis.tech'],
        blockExplorerUrls: ['https://explorer.polis.tech']
    }


}


export const ExtendedStyledMenuButton = styled(StyledMenuButton)`
  display: inline;
  border: 2px solid rgb(23, 21, 34);
  font-size: 0.875rem;
  font-weight: 500;
  //width: auto;
  height: 2.5rem;
  //margin-bottom: 10px;
  padding: 0;
  align:left;
  text-align: left;
  &:hover {
    border-color: rgb(33, 34, 49);
  }
`

export const ExtendedMenuFlyout = styled(MenuFlyout)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-height: 232px;
    overflow: auto;
    min-width: 11rem;
    top: -16.5rem;
    background: white;
  `};
`

export const MenuItem = styled.span`
    align-items: center;
    flex: 1;
    //display: flex;
    padding: 0.5rem 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text2};
    :hover {
        color: ${({ theme }) => theme.text1};
        cursor: pointer;
        text-decoration: none;
    }
    > svg {
        margin-right: 0px;
    }
`

export const MenuItemLogo = styled.img`
    display: inline;
    margin-right: 0.625rem;
    width: 20px;
    height: 20px;
`

export const MenuButtonLogo = styled.img`
    display: inline;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem 0.5rem;
`

export const MenuText = styled.span`
    display: inline;
`


// For now this component focuses on adding the olympus chain
function NetworkSwitch() {
    const { i18n } = useLingui()

    const { account, library, chainId } = useActiveWeb3React()


    const addOlympus = async() => {
        if(account!) return
        const params = PARAMS[ChainId.MAINNET]
        library?.send('wallet_addEthereumChain', [params, account])
        // await library?.connection.request({method: "wallet_addEthereumChain", params: [params]})
        // toggle()
    }


    return (
        <ExtendedStyledMenuButton
            onClick={() => {
                const params = PARAMS[ChainId.MAINNET]
                if (
                    library &&
                    library.provider.isMetaMask &&
                    library.provider.request
                ) {
                     library.provider
                        .request({
                            method: 'wallet_addEthereumChain',
                            params: [params, account]
                        })
                        .then(success => {
                            if (success) {
                                console.log(
                                    'Successfully added Olympus to MetaMask'
                                )
                            } else {
                                throw new Error('Something went wrong.')
                            }
                        })
                        .catch(console.error)
                }
                else {
                    console.log('Unsupported network')
                }

            }}
            className="flex items-center bg-dark-800 hover:bg-dark-700 w-full rounded p-3 cursor-pointer"
        >
            <img src={NETWORK_ICON[ChainId.MAINNET]} alt="Switch Network" className="rounded-md mr-2"
                 style={{ width: 22, height: 22 }}/>
            <div className="text-primary font-bold">{"Switch to " + NETWORK_LABEL[ChainId.MAINNET]}</div>
        </ExtendedStyledMenuButton>
    );
}

export default memo(NetworkSwitch)