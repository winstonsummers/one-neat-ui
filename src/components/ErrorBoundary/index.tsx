import React, { ReactElement } from 'react'
import { MessagePage } from '../../util/Components'

interface IErrorBoundary {
    children?: any
    errorData: null | any
}

const ErrorBoundary: React.FC<IErrorBoundary> = (props) => {
    const returnable: ReactElement =
        props.errorData === null ? (
            <div className='errorBoundaryPassed'>{props.children}</div>
        ) : (
            <MessagePage
                imgAlt='well that is something'
                imgUrl='coming soon'
                title='Well this is embarrassing...'
                message={
                    'Seems someone did something and screwed up my website. Seriously you just can\'t find good help these days. Tell you what, if refreshing the page doesn\'t fix this, go refresh your drink instead and things should be better when you get back.'
                }
            />
        )
    return returnable
}

export default ErrorBoundary
