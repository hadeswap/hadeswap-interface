import { SettingsOverscanOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { Form, Col, Row } from 'react-bootstrap'
import { ButtonLight } from '../../components/ButtonLegacy'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import useHadesSale from '../../hooks/useHadesSale'
import {RowBetween} from '../../components/Row'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { ButtonPrimary } from '../../components/ButtonLegacy'
import { Dots } from '../Pool/styleds'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { ChainId } from 'hadeswap-beta-sdk'
import { SOUL } from '../../constants'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker'
import { type } from 'os';

interface FuncProps {
    handleFinish: () => void;
    setPendingTx: (value: number) => void;
    setTx: (value: any) => void;
}

export default function SaleStep(props: FuncProps) {
    const { i18n } = useLingui();
    const { createSale, getCrowdsaleData } = useHadesSale();
    const [coin, setCoin] = useState('');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [price, setPrice] = useState('');
    const [goal, setGoal] = useState('');
    const [receiver, setReceiver] = useState('');
    const [approval, approveCallback] = useApproveCallback(undefined, '');
    const { account, chainId } = useActiveWeb3React();
    const soul = SOUL[ChainId.MAINNET];
    const [customAddress, setCustomAddress] = useState('');
    const color = '#FFFFFF'

    const handleCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoin(e.target.value);
    }
    const handleStart = (value: number) => {
        setStart(value);
    }
    const handleEnd = (value: number) => {
        setEnd(value);
    }
    const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    }
    const handleGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGoal(e.target.value);
    }
    const handleReceiver = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReceiver(e.target.value);
    }
    const handleCustomAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAddress(e.target.value);
    }

    const createSaleHandler = async () => {
        props.setPendingTx(1)
        const { template, amount, address } = globalThis.token;
        const data = await getCrowdsaleData(start, end, price, goal, receiver, address, amount);
        const tx = await createSale(template, address, data, amount, receiver);
        props.setTx(tx);
        if(tx !== undefined){
            props.setPendingTx(2)
        }
        else{
            props.setPendingTx(0)
        }
    };

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
                                onChange={handleCoin}
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
                                    onChange={handleCoin}
                            />
                            <Form.Check
                                    name='currency-group'
                                    value="usdc"
                                    type="radio"
                                    label=" USDC"
                                    onChange={handleCoin}
                            />
                            <Form.Check
                                    name='currency-group'
                                    value="usdt"
                                    type="radio"
                                    label=" USDT"
                                    onChange={handleCoin}
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
                                onChange={handleCoin}
                            />
                        </Form.Label>
                    </Form.Group>     
                </div>
                {coin === 'custom' &&
                <Form.Group as={Row} className="mb-3" >
                    <Col sm="5">
                        <Form.Control onChange={handleCustomAddress} required type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                </Form.Group>
                }
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
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                        
                                    renderInput={(props) => 
                                            <TextField 
                                                fullWidth {...props} 
                                                sx={{
                                                    svg: { color },
                                                    input: { color },
                                                    label: { color }
                                                  }}
                                            />}
                                    value={start}
                                    onChange={(newValue) => {
                                        console.log('start newValue: ', newValue)
                                        if (newValue !== null) {
                                            handleStart(newValue)
                                        }
                                    }}
                                    minDateTime={Date.now()}
                                />
                            </LocalizationProvider>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Col sm="5">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => 
                                        <TextField 
                                            fullWidth {...props} 
                                            sx={{
                                                svg: { color },
                                                input: { color },
                                                label: { color }
                                              }}
                                        />}
                                    value={end}
                                    onChange={(newValue) => {
                                        console.log('end newValue: ', newValue)
                                        if (newValue !== null) {
                                            handleEnd(newValue)
                                        }
                                    }}
                                    minDateTime={start}
                                />
                            </LocalizationProvider>
                        </Col>
                    </Form.Group>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Form.Label column sm="2">Price</Form.Label>
                    <Form.Label column sm="2">Goal</Form.Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Col sm="5">
                        <Form.Control required onChange={handlePrice} type="number" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                    <Col sm="5">
                        <Form.Control required onChange={handleGoal} type="number" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                </div>
                <br />

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">Address that receives funds raised</Form.Label>
                    <Col sm="5">
                        <Form.Control required onChange={handleReceiver} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/>
                    </Col>
                </Form.Group>
                
                <RowBetween>
                        {approval !== ApprovalState.APPROVED && (
                            <ButtonPrimary
                                onClick={approveCallback}
                                disabled={approval === ApprovalState.PENDING}
                                width={'48%'}
                            >
                                {approval === ApprovalState.PENDING ? (
                                    <Dots>
                                        {t`Approving ${soul?.getSymbol(
                                            chainId
                                        )}`}
                                    </Dots>
                                ) : (
                                    i18n._(
                                        t`Approve ${soul?.getSymbol(
                                            chainId
                                        )}`
                                    )
                                )}
                            </ButtonPrimary>
                        )}

                        <ButtonPrimary
                            onClick={createSaleHandler}
                            disabled={
                                start === 0 ||
                                end === 0 ||
                                coin === '' ||
                                receiver === '' ||
                                price === '' ||
                                goal === ''
                                // approval !== ApprovalState.APPROVED
                                // Number(soulBalance?.toFixed(18)) < Number(tokenFeeCost)
                            }
                            width={approval !== ApprovalState.APPROVED ? '48%' : '100%'}
                        >
                            {/* {Number(soulBalance?.toFixed(18)) >= Number(tokenFeeCost) ? (
                                i18n._(
                                    t`Create Sale`
                                )
                            ) : (
                                i18n._(
                                    t`Not enough SOUL balance`
                                )
                            )} */}
                            {i18n._(
                                    t`Not create sale`
                            )}
                        </ButtonPrimary>
                    </RowBetween>
            </div>
        </>
    )
}
