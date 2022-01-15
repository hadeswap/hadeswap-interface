import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useEffect, useState } from 'react'
import 'react-step-progress/dist/index.css';
import { TailSpin  } from 'react-loading-icons'


export default function Deployment() {
    const { i18n } = useLingui()

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewToken`)} | Soul</title>
            </Helmet>
            <hr style={{marginTop:'30px'}} />

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TailSpin  style={{marginTop:'40px'}} stroke="#4f7dc2" strokeOpacity={'1rem'} speed={.75} /> 
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'1rem'}}>
                <h3 style={{fontSize:'1.2rem'}}>Loading...</h3>
            </div>
        </>
    )
}