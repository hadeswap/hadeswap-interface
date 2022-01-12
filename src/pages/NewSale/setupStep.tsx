import React from 'react'
import { Form } from 'react-bootstrap'
import { AutoColumn } from '../../components/Column'
import { Row, Col } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Link } from 'react-router-dom'

export default function SetupStep() {
    return (
        <>
            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <AutoColumn gap={'md'}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Auction token</Form.Label>
                        <Col sm="5"> <Form.Control required type="text" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
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

                    <div className="grid grid-cols-2 gap-4">
                        <Form.Label column sm="2">Your token balance</Form.Label>
                        <Form.Label column sm="2">Your token allowance</Form.Label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Form.Label column sm="2">0</Form.Label>
                        <Form.Label column sm="2">0</Form.Label>
                    </div>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Token amount</Form.Label>
                        <Col sm="5"> <Form.Control type="text" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                    </Form.Group>
                </AutoColumn>
            </div>
        </>
    )
}
