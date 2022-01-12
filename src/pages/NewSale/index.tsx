import React from 'react'
import { Helmet } from 'react-helmet'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import StepProgressBar from 'react-step-progress'
import 'react-step-progress/dist/index.css';
import AuctionStep from './auctionStep'
import SetupStep from './setupStep'
import SaleStep from './saleSetup'

export default function NewSale() {
    const { i18n } = useLingui()

    const onFormSubmit = () => {
        console.log("onSubmit StepProgressBar :D");
    }

    const auctionStepValidator = () => {
        return true
    }

    const setupStepValidator = () => {
        return true
    }

    const saleStepValidator = () => {
        return true
    }

    const saleSteps = [
        {
            label: 'Auction',
            name: 'auction',
            content: <AuctionStep />,
            validator: auctionStepValidator
        },
        {
            label: 'Setup',
            name: 'setup',
            content: <SetupStep />,
            validator: setupStepValidator
        },
        {
            label: 'Sale',
            name: 'sale',
            content: <SaleStep />,
            validator: saleStepValidator
        }
    ]

    return (
        <>
            <Helmet>
                <title>{i18n._(t`New Sale`)} | Soul</title>
            </Helmet>

            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <StepProgressBar
                    startingStep={0}
                    onSubmit={onFormSubmit}
                    steps={saleSteps}
                />
            </div>
        </>
    )
}
