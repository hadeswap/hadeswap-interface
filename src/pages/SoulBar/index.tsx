import React from 'react'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { Helmet } from 'react-helmet'
import XSoulSign from '../../assets/images/xsushi-text-sign.png'
import InfoCard from './InfoCard'
import APRCard from './APRCard'
import StakeCard from './StakeCard'
import BalanceCard from './BalanceCard'
import { ChainId } from 'hadeswap-beta-sdk'
import { SOUL, XSOUL } from '../../constants'
import useTokenBalance from '../../hooks/useTokenBalance'

const mockData = {
    soulEarnings: 345.27898,
    weightedApr: 15.34
}

export default function XSoul() {
    const { account, chainId } = useActiveWeb3React()

    const soulBalance = useTokenBalance(SOUL[ChainId.SPARTA]?.address ?? '')
    const xSoulBalance = useTokenBalance(XSOUL?.address ?? '')

    return (
        <>
            <Helmet>
                <title>xSOUL | Soul</title>
            </Helmet>
            <div className="flex flex-col w-full">
                <div className="flex mb-6 justify-center">
                    <InfoCard />
                    <div className="hidden md:flex justify-center align-center w-72 ml-6">
                        <img src={XSoulSign} alt={'xsoul sign'} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col max-w-xl w-full">
                        {/* <div className="mb-4">
                            <APRCard />
                        </div> */}
                        <div>
                            <StakeCard soulBalance={soulBalance} xSoulBalance={xSoulBalance} />
                        </div>
                    </div>
                    <div className="hidden md:block w-72 ml-6">
                        <BalanceCard
                            soulEarnings={mockData.soulEarnings}
                            xSoulBalance={xSoulBalance}
                            soulBalance={soulBalance}
                            weightedApr={mockData.weightedApr}
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <div className="md:hidden flex justify-center w-full max-w-xl mt-6 mb-20">
                        <BalanceCard
                            soulEarnings={mockData.soulEarnings}
                            xSoulBalance={xSoulBalance}
                            soulBalance={soulBalance}
                            weightedApr={mockData.weightedApr}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
