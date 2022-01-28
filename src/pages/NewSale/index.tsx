import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import StepProgressBar from 'react-step-progress'
import 'react-step-progress/dist/index.css';
import AuctionStep from './auctionStep'
import SetupStep from './setupStep'
import SaleStep from './saleSetup'
import './styles.css'
import { useLocation } from 'react-router-dom';

export default function NewSale() {
    const { i18n } = useLingui()
    const [auctionType, setAuctionType] = useState<string>("");
    const [balance, setBalance] = useState<number>(0);
    const [allowance, setAllowance] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [approve, setApprove] = useState<boolean>(true);
    const location = useLocation();

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

    useEffect(() => {
        console.log("the auctionType is: ", auctionType)
        console.log("the location.state is: ", location.state);
    }, [auctionType])

    useEffect(() => {
        console.log("the amount is: ", amount)
    }, [amount]);

    useEffect(() => {
        console.log("the approve is: ", approve)
    }, [approve])

    const saleSteps = [
        {
            label: 'Auction',
            name: 'auction',
            validator: auctionStepValidator,
            content: <AuctionStep
                auctionType={auctionType}
                setAuctionType={setAuctionType}
            />
        },
        {
            label: 'Setup',
            name: 'setup',
            validator: setupStepValidator,
            content: <SetupStep 
                balance={balance}
                setBalance={setBalance}
                allowance={allowance}
                setAllowance={setAllowance}
                amount={amount}
                setAmount={setAmount}
            />,
        },
        {
            label: 'Sale',
            name: 'sale',
            validator: saleStepValidator,
            content: <SaleStep
                approve={approve}
                setApprove={setApprove}
            />
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
                    primaryBtnClass='spb-submit-btn'
                />
            </div>
        </>
    )
}
