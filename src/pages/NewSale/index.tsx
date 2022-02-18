import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import 'react-step-progress/dist/index.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { styled } from "@mui/material/styles";
import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel';
import AuctionStep from './auctionStep';
import SetupStep from './setupStep';
import SaleStep from './saleStep';
import { useLocation } from 'react-router-dom';
import { ButtonLight } from '../../components/ButtonLegacy';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const steps = ['Auction', 'Setup', 'Sale'];

globalThis.token = {
    address: '',
    template: '',
    amount: '',
};

export default function NewSale() {
    const { i18n } = useLingui()
    const [activeStep, setActiveStep] = React.useState(0);
    const location = useLocation();

    const [auctionType, setAuctionType] = useState('');
    // 0 for nothing, 1 for initiated, 2 for finished
    const [pendingTx, setPendingTx] = useState(0)
    const [tx, setTx] = useState(undefined)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onFormSubmit = () => {
        console.log("form sale submit");
    }

    const ColorlibStepLabel = styled(StepLabel)(() => ({
        [`& .${stepLabelClasses.label}`]: {
            [`&.${stepLabelClasses.completed}`]: {
                color: 'rgba(255, 255, 255, 1)',
            },
            [`&.${stepLabelClasses.active}`]: {
                color: 'rgba(255, 255, 255, 1)',
            },
            color: 'rgba(255, 255, 255, 0.3)',
        },
    }));

    const Steps = [
        {
            label: 'Auction',
            name: 'auction',
            content: <AuctionStep handleNext={handleNext} setAuctionType={setAuctionType} />,
        },
        {
            label: 'Setup',
            name: 'setup',
            content: <SetupStep handleNext={handleNext} />,
        },
        {
            label: 'Sale',
            name: 'sale',
            content: <SaleStep handleFinish={onFormSubmit} setPendingTx ={setPendingTx} setTx = {setTx} />,
        }
    ]

    return (
        <>
            <Helmet>
                <title>{i18n._(t`New Sale`)} | Soul</title>
            </Helmet>

            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
            {activeStep ? <ArrowBackIcon style={{ fontSize:'2.3rem', cursor: 'pointer' }} onClick={handleBack}/> :<p></p>}
                <h1 style={{ fontSize: '1.8rem', marginBottom:'10px', marginTop:'-15px', display: 'flex',  justifyContent:'center', alignItems:'center', height:'10vh'}}>Create new sale</h1>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <ColorlibStepLabel>{label}</ColorlibStepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {Steps[activeStep].content}
                </React.Fragment>

            </div>
        </>
    )
}
