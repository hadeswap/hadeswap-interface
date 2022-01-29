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
    const [address, setAddress] = useState<string | any>("AaA");
    const [amount, setAmount] = useState<number>(0);
    const [payment, setPayment] = useState<string>("");
    const [approve, setApprove] = useState<boolean>(true);
    const location = useLocation();
    let locationState: any;

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
    }, [auctionType])

    useEffect(() => {
        console.log("the address is: ", address)
    }, [address]);

    useEffect(() => {
        console.log("the payment is: ", payment)
    }, [payment]);

    useEffect(() => {
        console.log("the amount is: ", amount)
    }, [amount]);

    useEffect(() => {
        console.log("the approve is: ", approve)
    }, [approve])

    // useEffect(() => {
    //     // console.log("the location.state is: ", location.state);
    //     if (location.state !== undefined) {
    //         locationState = location.state;
    //         setAddress(locationState.data); 
    //     }
    // }, [])

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
                address={address}
                setAddress={setAddress}
                payment={payment}
                setPayment={setPayment}
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

            {location.state ?
                <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                    <StepProgressBar
                        startingStep={1}
                        onSubmit={onFormSubmit}
                        steps={saleSteps}
                        primaryBtnClass='spb-submit-btn'
                    />
                </div>
                :
                <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                    <StepProgressBar
                        startingStep={0}
                        onSubmit={onFormSubmit}
                        steps={saleSteps}
                        primaryBtnClass='spb-submit-btn'
                    />
                </div>
            }
        </>
    )
}
