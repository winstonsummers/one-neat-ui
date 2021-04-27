import React from 'react'
import { ActionControls } from '../../util/Components'
import './index.css'
import SearchBar from './SearchBar'

interface INavBar {

}

const NavBar: React.FC<INavBar> = (props) => {
    return (
        <div className='navbar-container' >
            <SearchBar onSearch={console.log} />
            <ActionControls />
        </div>
    )
}

export default NavBar
