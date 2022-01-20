import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useEffect, useState } from 'react'
import 'react-step-progress/dist/index.css';
import Card from 'react-bootstrap/Card'
import Button from '@mui/material/Button'


interface FuncProps {
    tx: any;
    handleFinish: () => void;
}
export default function Result(props: FuncProps) {
    const { i18n } = useLingui()

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>

            <hr style={{marginTop:'30px'}} />
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Card className="bg-dark-700 shadow-swap-blue-glow rounded" style={{ width: '18rem', marginTop:'30px', padding:'2rem'}}>
                    <Card.Body>
                        <Card.Title style={{fontSize:'1.3rem',display: 'flex',  justifyContent:'center', alignItems:'center'}}><b>Transaction ID:</b></Card.Title>
                        <Card.Text style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> {props.tx? props.tx.transactionHash : 'tx_id'}  </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Card className="bg-dark-700 shadow-swap-blue-glow rounded" style={{ width: '18rem', marginTop:'30px', padding:'2rem'}}>
                    <Card.Body>
                        <Card.Title style={{fontSize:'1.3rem',display: 'flex',  justifyContent:'center', alignItems:'center'}}><b>Token ID:</b></Card.Title>
                        <Card.Text style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> {props.tx? props.tx.events[1].args[1] : 'token_id'} </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}