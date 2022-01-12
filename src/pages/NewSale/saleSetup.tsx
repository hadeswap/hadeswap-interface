import React from 'react'
import { Form, InputGroup, Col, Row } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Link } from 'react-router-dom'

export default function SaleStep() {
    return (
        <>
            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Most common</Form.Label>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            <InputGroup>
                                <InputGroup.Radio name="currency-group" />
                                <InputGroup.Text> ETHEREUM</InputGroup.Text>
                            </InputGroup>
                        </Form.Label>
                    </Form.Group>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Stable coins</Form.Label>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            <InputGroup>
                                <InputGroup.Radio name="currency-group" />
                                <InputGroup.Text> DAI</InputGroup.Text>
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Radio name="currency-group" />
                                <InputGroup.Text> USDC</InputGroup.Text>
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Radio name="currency-group" />
                                <InputGroup.Text> USDT</InputGroup.Text>
                            </InputGroup>
                        </Form.Label>
                    </Form.Group>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Enter an ERC 20 token address</Form.Label>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            <InputGroup>
                                <InputGroup.Radio name="currency-group" />
                                <InputGroup.Text> CUSTOM</InputGroup.Text>
                            </InputGroup>
                        </Form.Label>
                    </Form.Group>
                </div>
                
                <div>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Fund wallet</Form.Label>
                        <Col sm="5"> <Form.Control required type="text" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                    </Form.Group>

                    <div className="flex justify-between items-center my-4">
                        <div className="text-sm font-bold">
                            <Trans>
                                <Link id="import-pool-link" to="/newtoken" className="text-blue">
                                    Use my account
                                </Link>
                            </Trans>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">Dutch Auction Settings</Form.Label>
                        </Form.Group>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Form.Label column sm="2">STARTING PRICE</Form.Label>
                        <Form.Label column sm="2">ENDING PRICE</Form.Label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Form.Label column sm="2">Lorem ipsum dolor sit.</Form.Label>
                        <Form.Label column sm="2">Lorem ipsum dolor sit.</Form.Label>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Form.Label column sm="2">MAXIMUM RAISED</Form.Label>
                        <Form.Label column sm="2">MINIMUM RAISED</Form.Label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Form.Label column sm="2">Lorem ipsum dolor sit.</Form.Label>
                        <Form.Label column sm="2">Lorem ipsum dolor sit.</Form.Label>
                    </div>
                </div>
            </div>
        </>
    )
}
