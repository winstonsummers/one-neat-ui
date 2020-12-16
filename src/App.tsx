import React from 'react'
import { SearchBar } from './util/Components'

function App() {
    return (
        <div className='App'>
            <SearchBar onSearch={console.log} />
        </div>
    )
}

export default App
