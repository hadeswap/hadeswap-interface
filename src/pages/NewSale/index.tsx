import React, { useContext, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { t, Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'

export default function NewSale() {
    const { i18n } = useLingui()

    return (
        <>
            <Helmet>
                <title>{i18n._(t`NewSale`)} | Soul</title>
            </Helmet>
        </>
    )
}
