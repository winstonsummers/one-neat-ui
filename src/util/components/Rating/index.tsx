import { Tooltip } from 'antd'
import React from 'react'

interface IRating {
    ratingPercent: number
}

const makeFractional = (cleanPercent: number): string => {
    const outtaTen = '/10'
    const decimal = '.'
    let returnable: string
    
    const strArr = cleanPercent.toString().split('')

    strArr[-1] !== '0' ? strArr.splice(-2, 0, decimal) : strArr.pop()

    returnable = strArr.join('')

    return returnable + outtaTen
}

const Rating: React.FC<IRating> = ({ ratingPercent }) => {
    const cleanPercent =
        ratingPercent > 99 ? 100 : ratingPercent < 1 ? 0 : ratingPercent
    const fractionalValue = makeFractional(cleanPercent)

    return (
        <div className='rating-container'>
            <Tooltip title={fractionalValue}>
                <div className='rating'></div>
            </Tooltip>
        </div>
    )
}

export default Rating
