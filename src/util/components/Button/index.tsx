import { Button as AButton } from 'antd'
import React from 'react'

interface IButton {
    onClick: any
    text: string
    onError: any
}

const Button: React.FC<IButton> = (props) => {
    // add some base error handling

    // might simplify this....

    return <AButton {...props} />
}

export default Button