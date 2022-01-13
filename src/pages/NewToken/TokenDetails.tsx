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

export default function TokenDetails() {
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
            content: "",
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
            <hr style={{marginTop:'30px'}} />
            <h1 style={{color:'grey', fontSize: '1.3rem', marginTop:'20px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>Token type</h1>
            <FormControl component="fieldset" style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <RadioGroup row aria-label="tokentype" name="row-radio-buttons-group" defaultValue='Mintable'>
                    <FormControlLabel onChange={isfixed} value="Fixed" control={<Radio />} label="Fixed" />
                    <FormControlLabel onChange={ismint} value="Mintable" control={<Radio />} label="Mintable" />
                    <FormControlLabel onChange={isgov} color="success" value="Governance" control={<Radio />} label="Governance"  />
                </RadioGroup>
            </FormControl>

            <div style={{ marginRight: "auto", paddingLeft:'30px'}}>
                </div>
                <br/>
                <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                    <AutoColumn gap={'md'}>
                        <Form.Group as={Row} className="mb-3" >
                                <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Name</h5>
                                <Col sm="5"> <Form.Control style={{ marginBottom:'15px'}} type="text" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                <h5 style={{marginBottom:'10px'}}>Symbol</h5>
                                {!fix && (
                                    <>
                                        <Col sm="5"> <Form.Control style={{ marginBottom:'15px'}} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                        <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Owner</h5>
                                    </>
                                 )
                                }
                                <Col sm="5"> <Form.Control style={{ marginBottom:'15px'}} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                {fix
                                    ? <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Total Supply</h5>
                                    : <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Initial Supply</h5>
                                }
                                <Col sm="5"> <Form.Control style={{ marginBottom:'15px'}} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                        </Form.Group>
                        {/* <ButtonLight height='10px'>Create Token </ButtonLight> */}
                    </AutoColumn>
                </div>

        </>
    )
}