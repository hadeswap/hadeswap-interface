import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React from 'react'
// import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {ButtonLight} from '../../components/ButtonLegacy'
import Column, { AutoColumn } from '../../components/Column'
import { AutoRow, RowBetween } from '../../components/Row'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'

export default function NewToken() {
    const { i18n } = useLingui()
    const [fix, setFix] = React.useState(false);
    const [mint, setMint] = React.useState(false);
    const [gov, setGov] = React.useState(false);
    const [cont, setCont] = React.useState(true);

    const isfixed = () =>{
        setCont(false);
        setFix(true);
        setMint(false);
        setGov(false);
    }
    const ismint = () =>{
        setCont(false);
        setFix(false);
        setMint(true);
        setGov(false);
     }
    const isgov = () =>{
        setCont(false);
        setFix(false);
        setMint(false);
        setGov(true);
    }
  
    console.log("cooont: ", cont);
    
   
    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>

            {cont &&
                <>
                    <div style={{ padding:'2.5rem' }}></div>
                    <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ textAlign:'center', padding:'20px'}} >
                            <h1 style={{ fontSize: '1.8rem', padding:'5px'}}>Choose your token type</h1>        
                            <Button style={{ fontSize: '1rem',margin:'10px' }} className="bg-dark-700 shadow-swap-blue-glow max-w-2xl rounded" onClick={isfixed}>Fixed token</Button><br/>
                            <Button style={{ fontSize: '1rem', margin:'10px' }} className="bg-dark-700 shadow-swap-blue-glow max-w-2xl rounded" onClick={ismint}>Mintable token</Button><br/>
                            <Button style={{ fontSize: '1rem', margin:'10px' }} className="bg-dark-700 shadow-swap-blue-glow max-w-2xl rounded" onClick={isgov}>Governance token</Button><br/>
                            
                    </div>
                </> 
            }

            {fix && 
                <>
                <div style={{ padding:'2.5rem' }}></div>
                <h1 style={{ fontSize: '1.8rem'}}>Create new fixed token</h1>       
                <br/>
                <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                    <AutoColumn gap={'md'}>
                        <Form.Group as={Row} className="mb-3" >
                                <Form.Label  column sm="2"> Name </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                <Form.Label column sm="2"> Initial Supply </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                        </Form.Group>
                        <ButtonLight height='10px'>Create Token </ButtonLight>
                    </AutoColumn>
                </div>
                </>
            }
            {mint && 
                <>
                <div style={{ padding:'2.5rem' }}></div>
                <h1 style={{ fontSize: '1.8rem'}}>Create new mintable token</h1>       
                <br/>
                <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                    <AutoColumn gap={'md'}>
                        <Form.Group as={Row} className="mb-3" >
                                <Form.Label  column sm="2"> Name </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                <Form.Label column sm="2"> Symbol </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                <Form.Label column sm="2"> Owner </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                <Form.Label column sm="2"> Initial Supply </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                        </Form.Group>
                        <ButtonLight height='10px'>Create Token </ButtonLight>
                    </AutoColumn>
                </div>
                </>
            }
            {gov && 
                <>
                <div style={{ padding:'2.5rem' }}></div>
                <h1 style={{ fontSize: '1.8rem'}}>Create new governance token</h1>       
                <br/>
                <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                    <AutoColumn gap={'md'}>
                        <Form.Group as={Row} className="mb-3" >
                                <Form.Label  column sm="2"> Name </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                <Form.Label column sm="2"> Symbol </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                <Form.Label column sm="2"> Owner </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                <Form.Label column sm="2"> Initial Supply </Form.Label>
                                <Col sm="5"> <Form.Control type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                        </Form.Group>
                        <ButtonLight height='10px'>Create Token </ButtonLight>
                    </AutoColumn>
                </div>
                </>
            }
        </>
    )
}
