import React, { useEffect, useState } from 'react'
import { AutoColumn } from '../../components/Column'
import { Row, Col, Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useLingui } from '@lingui/react'
import { Helmet } from 'react-helmet'
import { t, Trans } from '@lingui/macro'
import { RowBetween } from '../../components/Row'
import { ButtonPrimary } from '../../components/ButtonLegacy'
import { NavLink } from '../../../src/components/Link'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { Dots } from '../Pool/styleds'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { ChainId } from 'hadeswap-beta-sdk'
import { SOUL } from '../../constants'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import useHadesSale from 'hooks/useHadesSale'

interface FuncProps {
    handleNext: () => void;
    tokenInfo: any;
}

export default function SetupStep(props: FuncProps) {
    const location = useLocation();
    const { i18n } = useLingui();
    const [approval, approveCallback] = useApproveCallback(undefined, '');
    const { account, chainId } = useActiveWeb3React();
    const soul = SOUL[ChainId.MAINNET];
    // const soulBalance = useCurrencyBalance(account ?? undefined, soul ?? undefined);

    const [address, setAddress] = useState('');
    const [paymentAddress, setPaymentAddress] = useState('');
    const [amount, setAmount] = useState(0);

    const { createSale } = useHadesSale();

    const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }

    const paymentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentAddress(e.target.value);
    };

    const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.valueAsNumber);
    };

    const createSaleHandler = async() => {
        // props.setPendingTx(1)
        // const data = await getTokenData(name, symbol, owner, num.toString())
        // const tx = await createToken(template, data, name, symbol)
        // props.setTx(tx);
        // // const tx = undefined
        // // if tx object is not valid, we go back to step1 or error?
        // if(tx !== undefined){
        //     props.setPendingTx(2)
        // }
        // else{
        //     props.setPendingTx(0)
        // }
        // console.log('vars:\n');
        // console.log('   address => ', address);
        // console.log('   paymentAddress => ', paymentAddress);
        // console.log('   amount => ', amount);
        console.log('creating sale...');
        props.handleNext();
    };

    useEffect(() => {
        console.log('location.state =>\n', props.tokenInfo);
    }, [])

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewSale`)} | Soul</title>
            </Helmet>

            <div style={{ marginRight: "auto", paddingLeft:'30px'}}>
                </div>
                <br/>
                <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                    <AutoColumn gap={'md'}>
                        <Form.Group as={Row} className="mb-3">
                            <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Token address</h5>
                            <Col sm="5"> <Form.Control required onChange={addressHandler} style={{ marginBottom:'15px'}} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded" aria-label='name' /></Col>
                            
                            <h5 style={{marginBottom:'10px'}}>Token of payment</h5>
                            <Col sm="5"> <Form.Control required onChange={paymentHandler} style={{ marginBottom:'15px'}} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                            
                            <h5 style={{marginBottom:'10px'}}>Token amount</h5>
                            <Col sm="5"> <Form.Control required onChange={amountHandler} style={{ marginBottom:'15px'}} type="number" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
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
                                // disabled={
                                //     address === '' ||
                                //     paymentAddress === '' ||
                                //     amount <= 0 ||
                                //     approval !== ApprovalState.APPROVED
                                //     // Number(soulBalance?.toFixed(18)) < Number(tokenFeeCost)
                                // }
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
                                        t`Not enough SOUL balance`
                                )}
                            </ButtonPrimary>

                        </RowBetween>
                    </AutoColumn>
                </div>

                <div className="flex justify-between items-center my-4">
                     <div className="text-sm font-bold">
                        <Trans>
                         Don&apos;t have a token?{' '}
                            <NavLink id="import-pool-link" to="/newtoken" className="text-blue">
                                Create it now!
                            </NavLink>
                        </Trans>
                    </div>
                </div>

        </>
    )
}
