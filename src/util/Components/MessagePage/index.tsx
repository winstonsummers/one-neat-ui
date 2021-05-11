import React from 'react'
import Image from '../Image'

export interface IMessagePage {
    imgUrl: string
    imgAlt: string
    title: string
    message: string
}

/**
 * A component for returning various kinds of messages as a view in a simple and uniform way.
 * Use as a base for ErrorBoundary, 404's, etc
 */
const MessagePage: React.FC<IMessagePage> = (props) => {
    return (
        <div>
            <Image
                altText={props.imgAlt}
                imgUrl={props.imgUrl}
                className='message-image'
            />
            <h3>{props.title}</h3>
            <p>{props.message}</p>
        </div>
    )
}

export default MessagePage
