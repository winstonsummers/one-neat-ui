import React from 'react'
import { ActionControls, SearchBar } from '../../util/Components'

interface INavBar {

}

const NavBar: React.FC<INavBar> = (props) => {
    return (
        <div>
            <SearchBar onSearch={console.log} />
            <ActionControls />
        </div>
    )
}

export default NavBar
