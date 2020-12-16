import { SearchOutlined } from '@ant-design/icons'
import ActionControls from '../ActionControls'
import './index.css'
import React from 'react'

interface ISearchBar {
    onSearch: (value: string) => void
}

const SEARCH_FLAVOR_TEXT = [
    'What\'s your drink?',
    'Need a cold one?',
    'Pick your Poison',
    'How about a brew?',
]

const getFlavorText = (): string => {
    const { floor, random } = Math
    const randomIndex = floor(random() * SEARCH_FLAVOR_TEXT.length)
    return SEARCH_FLAVOR_TEXT[randomIndex]
}

const SearchBar: React.FC<ISearchBar> = (props) => {
    const [searchValue, setValue] = React.useState('')

    const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onSearch(searchValue)
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className='search-bar-container'>
            <form onSubmit={onSearch}>
                <input type='submit'>
                    <SearchOutlined />
                </input>
                <input
                    type='text'
                    onChange={onChange}
                    value={searchValue}
                    placeholder={getFlavorText()}
                />
            </form>
            <ActionControls />
        </div>
    )
}

export default SearchBar
