import { Tooltip } from 'antd'
import React from 'react'
import './index.css'

interface IRating {
    ratingPercent: number
}

const makeFractional = (cleanPercent: number): string => {
    const outtaTen = '/10'

    return (cleanPercent / 10).toString() + outtaTen
}

const Rating: React.FC<IRating> = ({ ratingPercent }) => {
    const cleanPercent = // do we really need to check this? seems unlikely?
        ratingPercent > 99 ? 100 : ratingPercent < 1 ? 0 : ratingPercent
    const fractionalValue = makeFractional(cleanPercent)

    return (
        <Tooltip
            title={fractionalValue}
            destroyTooltipOnHide={{ keepParent: false }}
            overlayClassName='tool-tip'
        >
            <div className='rating-container'>
                <div
                    className='rating'
                    style={{ width: `${cleanPercent}%` }}
                ></div>
            </div>
        </Tooltip>
    )
}

export default Rating
