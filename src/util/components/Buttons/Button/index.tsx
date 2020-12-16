import { Button as AButton } from 'antd'
import React from 'react'

export interface IButton {
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
    text: any
    disabled: boolean
}

const Button: React.FC<IButton> = ({ onClick, text, disabled }) => {
    // add some styling and stuff

    return (
        <AButton disabled={disabled} onClick={onClick}>
            {text}
        </AButton>
    )
}

export default Button
