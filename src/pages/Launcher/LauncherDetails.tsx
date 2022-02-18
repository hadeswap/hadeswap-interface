import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ButtonPrimary } from '../../components/ButtonLegacy'

export default function TokenDetails() {
    const { i18n } = useLingui()

    // const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};

    const ButtonStates = [
        {
            btnName: 'Approve token',
            onClickHandler: ''
        },
        {
            btnName: 'Create launcher',
            onClickHandler: ''
        },
        {
            btnName: 'Transfer',
            onClickHandler: ''
        },
    ]

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>
            
            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">Address of current auction contract</Form.Label>
                    <Col sm="5">
                        <Form.Control required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                </Form.Group>
                {/* <br /> */}

                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Percent of auction funds that will go to liquidity</Form.Label>
                    <Form.Label column sm="2">Time that liquidity will be locked</Form.Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Col sm="5">
                        <Form.Control required type="number" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                    <Col sm="5">
                        <Form.Control required type="number" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                </div>
                <br />

                {ButtonStates.map((state, index) => {
                    return (
                        <>
                            <ButtonPrimary key={index} width={'100%'}>
                                {state.btnName}
                            </ButtonPrimary>
                            <br />
                        </>
                    )
                })}
            </div>
        </>
    )
}