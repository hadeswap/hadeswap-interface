import { Helmet } from 'react-helmet'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ButtonPrimary } from '../../components/ButtonLegacy'
import useHadesLauncher from 'hooks/useHadesLauncher'

export default function LauncherDetails() {
    const { i18n } = useLingui()
    const { getLauncherData } = useHadesLauncher()
    const [perc, setPerc] = useState(0);
    const [time, setTime] = useState(0);

    // const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};

    const handleCreateLauncher = async () => {
        const owner = '0xDB8fD34B637a14c8DacF9ECfF51a6A7E5387B720' // wallet Paty
        const crowdAddress = '0xdEFBca679C7123A8377e113f20F0Aa6B8ccC0BB2'
        const tokenAddress = '0x74Eb00a3631096d2DBC4a9bE1f6A24B89cFF6340' // PATY
        const supply = '1000000000000000000000'

        const data = await getLauncherData(owner, crowdAddress, perc, time)
        // const tx = await createLauncher(owner, supply, tokenAddress, data)

        // console.log('tx from createLauncher hook:\n', tx);
    }

    const handleApprove = () => {
        console.log('approve token');
    }

    const handleTransfer = () => {
        console.log('Transfer token');
    }

    const ButtonStates = [
        {
            btnName: 'Approve token',
            onClickHandler: handleApprove
        },
        {
            btnName: 'Create launcher',
            onClickHandler: handleCreateLauncher
        },
        {
            btnName: 'Transfer',
            onClickHandler: handleTransfer
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
                            <ButtonPrimary onClick={state.onClickHandler} key={index} width={'100%'}>
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