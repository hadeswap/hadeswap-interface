import { NETWORK_ICON, NETWORK_LABEL } from '../../constants/networks'
import { useModalOpen, useNetworkModalToggle } from '../../state/application/hooks'

import { ApplicationModal } from '../../state/application/actions'
import { ChainId } from 'hadeswap-beta-sdk'
import Modal from '../Modal'
import ModalHeader from '../ModalHeader'
import React from 'react'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'

const PARAMS: {
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
    [ChainId.SPARTA]: {
        chainId: '0x51840',
        chainName: 'Polis',
        nativeCurrency: {
            name: 'Polis Token',
            symbol: 'POLIS',
            decimals: 18
        },
        rpcUrls: ['https://sparta-rpc.polis.tech'],
        blockExplorerUrls: ['https://sparta-explorer.polis.tech']
    },
    [ChainId.MAINNET]: {
        chainId: '0x518AF',
        chainName: 'Polis',
        nativeCurrency: {
            name: 'Polis',
            symbol: 'POLIS',
            decimals: 18
        },
        rpcUrls: ['https://rpc.polis.tech'],
        blockExplorerUrls: ['https://explorer.polis.tech']
    }
}

export default function NetworkModal(): JSX.Element | null {
    const { chainId, library, account } = useActiveWeb3React()
    const networkModalOpen = useModalOpen(ApplicationModal.NETWORK)
    const toggleNetworkModal = useNetworkModalToggle()

    if (!chainId) return null

    return (
        <Modal isOpen={networkModalOpen} onDismiss={toggleNetworkModal}>
            <ModalHeader onClose={toggleNetworkModal} title="Select a Network" />
            <div className="text-lg text-primary mb-6">
                You are currently browsing <span className="font-bold text-pink">SOUL</span>
                <br /> on the <span className="font-bold text-blue">{NETWORK_LABEL[chainId]}</span> network
            </div>

            <div className="flex flex-col space-y-5 overflow-y-auto">
                {[
                    ChainId.MAINNET
                ].map((key: ChainId, i: number) => {
                    if (chainId === key) {
                        return (
                            <button key={i} className="bg-gradient-to-r from-blue to-blue-dark w-full rounded p-px">
                                <div className="flex items-center h-full w-full bg-dark-1000 rounded p-3">
                                    <img
                                        src={NETWORK_ICON[key]}
                                        alt="Switch Network"
                                        className="rounded-md mr-3 w-8 h-8"
                                    />
                                    <div className="text-primary font-bold">{NETWORK_LABEL[key]}</div>
                                </div>
                            </button>
                        )
                    }
                    return (
                        <button
                            key={i}
                            onClick={() => {
                                toggleNetworkModal()
                                const params = PARAMS[key]
                                library?.send('wallet_addEthereumChain', [params, account])
                            }}
                            className="flex items-center bg-dark-800 hover:bg-dark-700 w-full rounded p-3 cursor-pointer"
                        >
                            <img src={NETWORK_ICON[key]} alt="Switch Network" className="rounded-md mr-2 w-8 h-8" />
                            <div className="text-primary font-bold">{NETWORK_LABEL[key]}</div>
                        </button>
                    )
                })}
            </div>
        </Modal>
    )
}
