import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React from 'react'
// import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {ButtonLight} from '../../../components/ButtonLegacy'
import Column, { AutoColumn } from '../../../components/Column'
import { AutoRow, RowBetween } from '../../../components/Row'

export default function Governance() {
    const { i18n } = useLingui()

   
    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>

            {/* Governance token */}
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
            {/* Governance token */}
        </>
    )
}
