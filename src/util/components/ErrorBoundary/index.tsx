import React, { ReactElement } from 'react'

interface IErrorBoundary {
    children?: any
    errorData: null | any
}

const ErrorBoundary: React.FC<IErrorBoundary> = (props) => {
    const returnable: ReactElement =
        props.errorData === null ? (
            <div className='errorBoundaryPassed'>{props.children}</div>
        ) : (
            <div>ERROR</div>
        )
    return returnable
}

export default ErrorBoundary
