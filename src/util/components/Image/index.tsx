import { Tooltip } from 'antd'
import React from 'react'

interface IImage {
    altText: string
    hoverText?: string
    imgUrl: string
    className: string
}

const Image: React.FC<IImage> = ({ altText, hoverText, imgUrl, className }) => {
    return (
        <div className={'image-container ' + className}>
            <Tooltip title={hoverText ? hoverText : altText}>
                <img src={imgUrl} alt={altText} />
            </Tooltip>
        </div>
    )
}

export default Image
