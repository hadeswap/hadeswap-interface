import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useState } from 'react'
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import TokenDetails from './TokenDetails'
import Deployment from './Deployment'
import Result from './Result'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Details', 'Deployment', 'Result'];

export default function NewToken() {
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

    const Steps = [
        {
            label: 'Details',
            name: 'details',
            content: <TokenDetails handleNext={handleNext} setPendingTx ={setPendingTx} setTx = {setTx}/>,
        },
        {
            label: 'Deployment',
            name: 'deploy',
            content: <Deployment handleNext= {handleNext} pendingTx = {pendingTx}/>,
        },
        {
            label: 'Result',
            name: 'result',
            content: <Result tx = {tx} handleFinish= {onFormSubmit} />,
        }
    ]

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>

            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
            <h1 style={{ fontSize: '1.8rem', marginBottom:'10px', marginTop:'-15px', display: 'flex',  justifyContent:'center', alignItems:'center', height:'10vh'}}>Create new token</h1>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
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