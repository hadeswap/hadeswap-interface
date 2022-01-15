import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React from 'react'
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import TokenDetails from './TokenDetails'
import Deployment from './Deployment'
import Result from './Result'


export default function NewToken() {
    const { i18n } = useLingui()
    const TokenValidator = () => {
        return true
    }

    const DeploymentValidator = () => {
        return true
    }

    const ResultValidator = () => {
        return true
    }

    const onFormSubmit = () => {
        console.log("form submit");
    }

    const Steps = [
        {
            label: 'Details',
            name: 'details',
            content: <TokenDetails/>,
            validator: TokenValidator
        },
        {
            label: 'Deployment',
            name: 'deploy',
            content: <Deployment/>,
            validator: DeploymentValidator
        },
        {
            label: 'Result',
            name: 'result',
            content: <Result/>,
            validator: ResultValidator
        }
    ]

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>

            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
            <h1 style={{ fontSize: '1.8rem', marginBottom:'10px', marginTop:'-15px', display: 'flex',  justifyContent:'center', alignItems:'center', height:'10vh'}}>Create new token</h1>        
                <StepProgressBar
                    startingStep={0}
                    onSubmit={onFormSubmit}
                    steps={Steps}
                />
        
            </div>
        </>
    )
}