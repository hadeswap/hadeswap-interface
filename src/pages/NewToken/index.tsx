import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {ButtonLight} from '../../components/ButtonLegacy'
import { AutoColumn } from '../../components/Column'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TokenDetails from './TokenDetails'


export default function NewToken() {
    const { i18n } = useLingui()
    const [fix, setFix] = React.useState(false);
    const [mint, setMint] = React.useState(false);
    const [gov, setGov] = React.useState(false);

    const isfixed = () =>{
        console.log("isfixed");
        setFix(true);
        setMint(false);
        setGov(false);
    }
    const ismint = () =>{
        console.log("ismint");
        setFix(false);
        setMint(true);
        setGov(false);
     }
    const isgov = () =>{
        console.log("isgov");
        setFix(false);
        setMint(false);
        setGov(true);
    }

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
            content: "",
            validator: DeploymentValidator
        },
        {
            label: 'Result',
            name: 'result',
            content: "",
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