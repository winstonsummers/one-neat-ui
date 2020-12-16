import React, { ReactElement } from 'react'
import ErrorView from './ErrorView'

interface IErrorBoundary {
    children?: any
    errorData: null | any
}

const ErrorBoundary: React.FC<IErrorBoundary> = (props) => {
    const returnable: ReactElement =
        props.errorData === null ? (
            <div className='errorBoundaryPassed'>{props.children}</div>
        ) : (
            <ErrorView />
        )
    return returnable
}

export default ErrorBoundary
