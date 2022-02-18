import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ButtonLight, ButtonPrimary } from '../../components/ButtonLegacy'
import { AutoColumn } from '../../components/Column'
import {RowBetween} from '../../components/Row'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'react-step-progress/dist/index.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useHistory } from 'react-router-dom'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { getRouterAddress, isAddressString } from '../../utils'
import { SOUL, TOKEN_FACTORY_ADDRESS } from '../../constants'
import useMasterChef from '../../hooks/useMasterChef'
import useHadesLauncher from '../../hooks/useHadesLauncher'
import { useCurrency } from '../../hooks/Tokens'
import { ChainId, Currency, CurrencyAmount } from 'hadeswap-beta-sdk'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { Field } from '../../state/mint/actions'
import { tryParseAmount } from '../../state/swap/hooks'
import { Dots } from '../Pool/styleds'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import { BigNumber } from '@ethersproject/bignumber'
import { NavLink } from '../../../src/components/Link'

interface FuncProps {
    handleNext: () => void;
    setPendingTx: (value: number) => void;
    setTx: (value: any) => void;

}
export default function TokenDetails(props: FuncProps) {
    const { i18n } = useLingui()
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [owner, setOwner] = useState('');
    const [num, setNum] = useState('');

    const [fix, setFix] = React.useState(false);
    const [mint, setMint] = React.useState(false);
    const [gov, setGov] = React.useState(false);
    const [template, setTemplate] = useState('1');

    const { account, chainId } = useActiveWeb3React()
    const soul = SOUL[ChainId.MAINNET]

    const { createToken, getTokenData, tokenFeeCost } = useHadesLauncher()
    const independentAmount: CurrencyAmount | undefined = tryParseAmount(tokenFeeCost, soul)
    const [approval, approveCallback] = useApproveCallback(independentAmount, TOKEN_FACTORY_ADDRESS)
    const soulBalance = useCurrencyBalance(account ?? undefined, soul ?? undefined)

    const isfixed = () =>{
        setFix(true);
        setMint(false);
        setGov(false);
        setTemplate('2');
    }
    const ismint = () =>{
        setFix(false);
        setMint(true);
        setGov(false);
        setTemplate('1');

    }
    const isgov = () =>{
        setFix(false);
        setMint(false);
        setGov(true);
        setTemplate('3');
    }

    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    };

    const symbolHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSymbol(e.target.value);
    };

    const ownerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOwner(e.target.value);
    };

    const numHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setNum(e.target.value)
        }
    };

    const newTokenSaleHandler = () => {
        globalThis.token.address = '0xNEW_TOKEN_ADDRESS';
        globalThis.token.template = '_1_';
    }

    const createTokenHandler = async() => {
        props.handleNext()
        props.setPendingTx(1)
        const data = await getTokenData(name, symbol, owner, num.toString())
        const tx = await createToken(template, data, name, symbol)
        props.setTx(tx);
        // const tx = undefined
        // if tx object is not valid, we go back to step1 or error?
        if(tx !== undefined){
            props.setPendingTx(2)
        }
        else{
            props.setPendingTx(0)
        }
    };

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>
            <hr style={{marginTop:'30px'}} />
            <h1 style={{color:'grey', fontSize: '1.3rem', marginTop:'20px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>Token type</h1>
            <FormControl component="fieldset" style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <RadioGroup row aria-label="tokentype" name="row-radio-buttons-group" defaultValue='Mintable'>
                    <FormControlLabel onChange={isfixed} value="Fixed" control={<Radio />} label="Fixed" />
                    <FormControlLabel onChange={ismint} value="Mintable" control={<Radio />} label="Mintable" />
                    <FormControlLabel onChange={isgov} value="Governance" control={<Radio />} label="Governance"  />
                </RadioGroup>
            </FormControl>

            <div style={{ marginRight: "auto", paddingLeft:'30px'}}>
                </div>
                <br/>
                <div className="bg-dark-900 shadow-swap-blue-glow w-full max-w-2xl rounded" style={{ padding: '1rem 1rem' }} >
                    <AutoColumn gap={'md'}>
                        <Form.Group as={Row} className="mb-3">
                                <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Name</h5>
                                <Col sm="5"> <Form.Control  aria-label='name' onChange={nameHandler} style={{ marginBottom:'15px'}} type="text" className="bg-dark-700  shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                
                                <h5 style={{marginBottom:'10px'}}>Symbol</h5>
                                <Col sm="5"> <Form.Control onChange={symbolHandler} style={{ marginBottom:'15px'}} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                {!fix && (
                                    <>
                                        <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Owner</h5>
                                        <Col sm="5"> <Form.Control onChange={ownerHandler} style={{ marginBottom:'15px'}} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
                                    </>
                                )
                                }
                                {fix
                                    ? <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Total Supply</h5>
                                    : <h5 style={{marginBottom:'10px', marginLeft:'3px'}}>Initial Supply</h5>
                                }
                                <Col sm="5"> <Form.Control value={num}  onChange={numHandler} style={{ marginBottom:'15px'}} type="text" className="bg-dark-700 shadow-swap-blue-glow w-full max-w-2xl rounded"/></Col>
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
                                onClick={createTokenHandler}
                                disabled={
                                    name === '' ||
                                    symbol === '' ||
                                    Number(num) <= 0 ||
                                    approval !== ApprovalState.APPROVED ||
                                    Number(soulBalance?.toFixed(18)) < Number(tokenFeeCost)
                                }
                                width={approval !== ApprovalState.APPROVED ? '48%' : '100%'}
                            >
                                {Number(soulBalance?.toFixed(18)) >= Number(tokenFeeCost) ? (
                                    i18n._(
                                        t`Create Token`
                                    )
                                ) : (
                                    i18n._(
                                        t`Not enough SOUL balance`
                                    )
                                )}
                            </ButtonPrimary>
                        </RowBetween>
                    </AutoColumn>
                </div>

                <div style={{padding:'25px',display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <ButtonPrimary style={{width:'30rem'}} onClick={newTokenSaleHandler}>
                        <NavLink to='/newsale' >
                            {i18n._(t`New Sale`)}
                        </NavLink>
                    </ButtonPrimary>
                </div>

        </>
    )
}