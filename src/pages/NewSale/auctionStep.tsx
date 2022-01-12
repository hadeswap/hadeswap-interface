import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export default function SetupStep() {
    return (
        <>
            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">
                        <InputGroup>
                            <InputGroup.Radio name="auction-group" />
                            <InputGroup.Text> Dutch Auction</InputGroup.Text>
                        </InputGroup>
                        <span>Dutch Auction Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, totam nostrum? Necessitatibus, odio ea dolor quas fugiat libero quidem aut? Ab molestiae inventore delectus sint veritatis quo sunt explicabo consequuntur.</span>
                    </Form.Label>
                    <Form.Label column sm="2">
                        <InputGroup>
                            <InputGroup.Radio name="auction-group" />
                            <InputGroup.Text> Crowdsale</InputGroup.Text>
                        </InputGroup>
                        <span>Crowdsale Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, totam nostrum? Necessitatibus, odio ea dolor quas fugiat libero quidem aut? Ab molestiae inventore delectus sint veritatis quo sunt explicabo consequuntur.</span>
                    </Form.Label>
                </div>
            </div>
        </>
    )
}
