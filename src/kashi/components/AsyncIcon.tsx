import { ChainId, Token } from 'hadeswap-beta-sdk'
import React, { useEffect, useState } from 'react'

import Circle from '../../assets/images/blue-loader.svg'
import { CustomLightSpinner } from '../../theme'

const AsyncTokenIcon = ({ src, className }: { src: any; className?: string }): JSX.Element => {
    const [loadedSrc, setLoadedSrc] = useState<string>()

    src = src || `${process.env.PUBLIC_URL}/images/tokens/unknown.png`

    // Address gets changed after chainId so only run this on address change
    // to avoid missing token icon error on chainId change
    useEffect(() => {
        setLoadedSrc('')

        const image = new Image()

        const handleLoad = () => {
            setLoadedSrc(src)
        }

        image.addEventListener('load', handleLoad)
        image.src = src

        return () => {
            image.removeEventListener('load', handleLoad)
        }
    }, [src])

    return loadedSrc ? (
        <img src={loadedSrc} className={className} alt="" />
    ) : (
        <div className={[className, 'flex justify-center items-center bg-gray-900'].join(' ')}>
            <CustomLightSpinner src={Circle} alt="loader" size={'24px'} />
        </div>
    )
}

export default AsyncTokenIcon
