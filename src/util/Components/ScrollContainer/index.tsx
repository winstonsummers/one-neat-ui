import React from 'react'

interface IScrollContainer {
    children?: React.FC<any> | React.FC<any>[]
}

const SCROLL_STYLING: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
}

const ScrollContainer: React.FC<IScrollContainer> = ({
    children,
}) => {
    
    return <div style={SCROLL_STYLING}>{children}</div>
}

export default ScrollContainer
