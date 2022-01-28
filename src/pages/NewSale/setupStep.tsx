import React from 'react'
import { AutoColumn } from '../../components/Column'
import { Row, Col, Form } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Link } from 'react-router-dom'

type Props = {
    balance: number;
    setBalance: (balance: number) => void;
    allowance: number;
    setAllowance: (allowance: number) => void;
    amount: number;
    setAmount: (amount: number) => void;
}

export default function SetupStep({
    balance, setBalance,
    allowance, setAllowance,
    amount, setAmount
}: Props) {

    return (
        <>
            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <AutoColumn gap={'md'}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Token address</Form.Label>
                        <Col sm="5">
                            <Form.Control required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Token of payment</Form.Label>
                        <Col sm="5">
                            <Form.Control required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Token amount</Form.Label>
                        <Col sm="5">
                            <Form.Control required type="number" onChange={(e: any) => setAmount(e.target.valueAsNumber)} className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                        </Col>
                    </Form.Group>

                    <div className="flex justify-between items-center my-4">
                        <div className="text-sm font-bold">
                            <Trans>
                            Don&apos;t have a token?{' '}
                                <Link id="import-pool-link" to="/newtoken" className="text-blue">
                                    Create it now!
                                </Link>
                            </Trans>
                        </div>
                    </div>
                </AutoColumn>
            </div>
        </>
    )
}
