import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useState } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel';
import { styled } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LauncherDetails from './LauncherDetails'

const steps = ['Details', 'Deployment', 'Result'];

export default function Launcher() {
    const { i18n } = useLingui()
    const [activeStep, setActiveStep] = React.useState(0);
    // 0 for nothing, 1 for initiated, 2 for finished
    const [pendingTx, setPendingTx] = useState(0)
    const [tx, setTx] = useState(undefined)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };

    const onFormSubmit = () => {
        console.log("form submit");
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
            label: 'Details',
            name: 'details',
            content: <LauncherDetails />,
        },
        {
            label: 'Deployment',
            name: 'deploy',
            // content: <Deployment handleNext= {handleNext} pendingTx = {pendingTx}/>,
        },
        {
            label: 'Result',
            name: 'result',
            // content: <Result tx = {tx} handleFinish= {onFormSubmit} />,
        }
    ]

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>

            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
            {activeStep ? <ArrowBackIcon style={{ fontSize:'2.3rem', cursor: 'pointer' }} onClick={handleBack}/> :<p></p>}
            <h1 style={{ fontSize: '1.8rem', marginBottom:'10px', marginTop:'-15px', display: 'flex',  justifyContent:'center', alignItems:'center', height:'10vh'}}>Launcher</h1>
            
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