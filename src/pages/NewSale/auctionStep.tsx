import React from 'react'
import { Form } from 'react-bootstrap'

type Props = {
    auctionType: string;
    setAuctionType: (auctionType: string) => void;
}

export default function SetupStep({ auctionType, setAuctionType }: Props) {
    const auctionTypes = [
        {
            name: 'CROWDSALE',
            description: 'Token owner puts X amount of tokens at sale at a fixed price P. Sale with end if a min goal is reached, else all funds are returned.'
        },
    ]

    return (
        <>
            <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                <div className="grid gap-4">
                    {auctionTypes.map((at, index) => {
                        return <>
                            <Form.Label key={index} column sm="2">
                                <Form.Check
                                    name='auction-group'
                                    value="dutch"
                                    type="radio"
                                    label={" " + at.name}
                                    onChange={(e: any) => setAuctionType(e.target.value)}
                                />
                                <span>{at.description}</span>
                            </Form.Label>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}
