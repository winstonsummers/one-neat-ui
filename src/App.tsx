import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import NavBar from './components/NavBar'
import { AppProvider } from './Context'

function App() {
    return (
        <AppProvider className='App'>
            <NavBar />
            <ErrorBoundary
                errorData={null}
            >
                
            </ErrorBoundary> 
        </AppProvider>
    )
}

export default App
