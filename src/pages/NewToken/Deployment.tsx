import { Helmet } from 'react-helmet'
import { t} from '@lingui/macro'
import { useLingui } from '@lingui/react'
import React, { useEffect, useState } from 'react'
import 'react-step-progress/dist/index.css';
import { TailSpin  } from 'react-loading-icons'

interface FuncProps {
    pendingTx: number;
    handleNext: () => void;
}
export default function Deployment(props: FuncProps) {
    const { i18n } = useLingui()


    useEffect(() => {
        console.log(props.pendingTx)
        if(props.pendingTx === 2){
            props.handleNext()
        }
        if(props.pendingTx === 0){
            console.log("invalid transaction or error")
        }
    }, [props.pendingTx])

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