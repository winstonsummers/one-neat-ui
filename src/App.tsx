import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import NavBar from './components/NavBar'
import { AppProvider } from './Context'
import { Rating } from './util/Components'

const makeNumber = () => {
    return Math.floor(Math.random() * 100)
}

function App() {
    return (
        <AppProvider className='App'>
            <NavBar />
            <ErrorBoundary
                errorData={null}
            >
                <Rating ratingPercent={10} />
                <Rating ratingPercent={50} />
                <Rating ratingPercent={100} />

                <Rating ratingPercent={makeNumber()} />
                <Rating ratingPercent={makeNumber()} />
                <Rating ratingPercent={makeNumber()} />
                <Rating ratingPercent={makeNumber()} />
                <Rating ratingPercent={makeNumber()} />
                <Rating ratingPercent={makeNumber()} />
                <Rating ratingPercent={makeNumber()} />
                
            </ErrorBoundary> 
        </AppProvider>
    )
}

export default App
