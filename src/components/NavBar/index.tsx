import React from 'react'
import Logger from '../../util/Logger'
import './index.css'
import SearchBar from './SearchBar'

interface INavBar {

}

const NavBar: React.FC<INavBar> = (props) => {
    return (
        <div className='navbar-container' >
            <SearchBar onSearch={Logger.info} />
        </div>
    )
}

export default NavBar
