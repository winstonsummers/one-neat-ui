import { DownOutlined, LeftOutlined } from '@ant-design/icons'
import React from 'react'
import Button, { IButton } from '../Button'

interface IDropButton extends IButton {
    options: IButton[]
}

const DropButton: React.FC<IDropButton> = (props) => {
    const [isOpen, setOpen] = React.useState(false)

    const onHoverIn = () => {
        setOpen(true)
    }

    const onHoverOut = () => {
        setOpen(false)
    }

    const onClickEvent = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault()
        setOpen(!isOpen)
    }

    const Carrot = isOpen ? DownOutlined : LeftOutlined

    const buttons = props.options.map((opt: IButton) => {
        return <Button {...opt} />
    })

    return (
        <div onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
            <div>
                <Button {...props} />
                <Carrot onClick={onClickEvent} />
            </div>
            <div>{isOpen ? buttons : null}</div>
        </div>
    )
}

export default DropButton
