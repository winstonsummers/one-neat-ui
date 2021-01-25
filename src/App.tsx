import React from 'react'
import NavBar from './components/NavBar'
import { AppProvider } from './Context'

function App() {
    return (
        <AppProvider className='App'>
            <NavBar />
        </AppProvider>
    )
}

export default App
