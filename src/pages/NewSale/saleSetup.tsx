import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { ButtonLight } from '../../components/ButtonLegacy'
import useHadesSale from '../../hooks/useHadesSale'

interface FuncProps {
    handleFinish: () => void;
}

export default function SaleStep(props: FuncProps) {
    const { createSale } = useHadesSale();

    const handleApprove = () => {
        console.log("approving...");
        // setApprove(!approve);

        const tx = createSale();
        console.log("lo que regresa en tx es:\n", tx)
    }

    return (
        <>
            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Most common</Form.Label>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            <Form.Check
                                name='currency-group'
                                value="ethereum"
                                type="radio"
                                label=" ETHEREUM"
                                // onChange={(e: any) => console.log(e.target.value)}
                            />
                        </Form.Label>
                    </Form.Group>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Stable coins</Form.Label>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            <Form.Check
                                    name='currency-group'
                                    value="dai"
                                    type="radio"
                                    label=" DAI"
                                    // onChange={(e: any) => console.log(e.target.value)}
                            />
                            <Form.Check
                                    name='currency-group'
                                    value="usdc"
                                    type="radio"
                                    label=" USDC"
                                    // onChange={(e: any) => console.log(e.target.value)}
                            />
                            <Form.Check
                                    name='currency-group'
                                    value="usdt"
                                    type="radio"
                                    label=" USDT"
                                    // onChange={(e: any) => console.log(e.target.value)}
                            />
                        </Form.Label>
                    </Form.Group>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Enter an ERC 20 token address</Form.Label>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            <Form.Check
                                name='currency-group'
                                value="custom"
                                type="radio"
                                label=" CUSTOM"
                                // onChange={(e: any) => console.log(e.target.value)}
                            />
                        </Form.Label>
                    </Form.Group>
                </div>
                <br />
                
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">AUCTION START &amp; END TIME</Form.Label>
                </Form.Group>
                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Start time</Form.Label>
                    <Form.Label column sm="2">End time</Form.Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm="5">
                            <Form.Control required type="date" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm="5">
                            <Form.Control required type="date" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                        </Col>
                    </Form.Group>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Price</Form.Label>
                    <Form.Label column sm="2">Goal</Form.Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Col sm="5">
                        <Form.Control required type="number" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                    <Col sm="5">
                        <Form.Control required type="number" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                </div>
                <br />

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">Address that receives funds raised</Form.Label>
                    <Col sm="5">
                        <Form.Control required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                </Form.Group>
                <ButtonLight onClick={handleApprove}>Approve</ButtonLight>
            </div>
        </>
    )
}
