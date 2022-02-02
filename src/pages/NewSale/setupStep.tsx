import React, { useEffect } from 'react'
import { AutoColumn } from '../../components/Column'
import { Row, Col, Form } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Link, useLocation } from 'react-router-dom'


type Props = {
    address: string;
    setAddress: (address: string) => void;
    payment: string;
    setPayment: (payment: string) => void;
    amount: number;
    setAmount: (amount: number) => void;
}

export default function SetupStep({
    address, setAddress,
    payment, setPayment,
    amount, setAmount
}: Props) {
    const location = useLocation();
    let locationState: any;
    let value = "";

    const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }

    const paymentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPayment(e.target.value);
    };

    const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.valueAsNumber);
    };

    useEffect(() => {
        const setLocationState = () => { 
            value = address;
            locationState = location.state;
            setAddress(locationState?.data);
            const s = setInterval(() => {
                setAddress(locationState?.data);
            }, 1000);
            console.log("s: ", value);
        }
        setLocationState();
    }, [address])

    return (
        <>
            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <AutoColumn gap={'md'}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Token address</Form.Label>
                        <Col sm="5">
                            {/* <Form.Control onChange={(e: any) => setAddress(e.target.value)} value={address} required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/> */}
                            {/* <Form.Control onChange={addressHandler} value={address} required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/> */}
                            <Form.Control onChange={addressHandler} required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Token of payment</Form.Label>
                        <Col sm="5">
                            {/* <Form.Control onChange={paymentHandler} value={payment} required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/> */}
                            <Form.Control onChange={paymentHandler} required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Token amount</Form.Label>
                        <Col sm="5">
                            {/* <Form.Control onChange={amountHandler} value={amount} required type="number" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/> */}
                            <Form.Control onChange={amountHandler} required type="number" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/>
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
