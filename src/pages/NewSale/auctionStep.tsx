import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import { Helmet } from 'react-helmet'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

interface FuncProps {
    handleNext: () => void;
    setAuctionType: (value: string) => void;
}

export default function SetupStep(props: FuncProps) {
    const { i18n } = useLingui();

    const isCrowdsale = () => {
        globalThis.token.template = '1';
        props.handleNext();
    }

    const auctionTypes = [
        {
            name: 'Crowdsale',
            func: isCrowdsale,
            description: 'Token owner puts X amount of tokens at sale at a fixed price P. Sale with end if a min goal is reached, else all funds are returned.'
        },
    ]

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewSale`)} | Soul</title>
            </Helmet>
            <hr style={{marginTop:'30px'}} />
            <h1 style={{color:'grey', fontSize: '1.3rem', marginTop:'20px', display: 'flex',  justifyContent:'center', alignItems:'center'}}>Auction type</h1>
            <FormControl component="fieldset" style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <RadioGroup row aria-label="auctionType" name="row-radio-buttons-group" >
                {/* <RadioGroup row aria-label="auctionType" name="row-radio-buttons-group" defaultValue='Crowdsale'> */}
                    {auctionTypes &&
                        auctionTypes.map((type, index) => {
                            return <FormControlLabel key={index} onChange={type.func} value={type.name} control={<Radio />} label={type.name} />
                        })
                    }
                </RadioGroup>
            </FormControl>
        </>
    )
}
