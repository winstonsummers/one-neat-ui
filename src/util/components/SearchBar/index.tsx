import { SearchOutlined } from '@ant-design/icons'
import React from 'react'

interface ISearchBar {
    onSearch: (value: string) => void
}

const SEARCH_FLAVOR_TEXT = [
    "What's your drink?",
    'Need a cold one?',
    'Pick your Poison',
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
        <div>
            <form onSubmit={onSearch}>
                <input
                    type='text'
                    onChange={onChange}
                    value={searchValue}
                    placeholder={getFlavorText()}
                />
                <input type='submit'>
                    <SearchOutlined />
                </input>
            </form>
        </div>
    )
}

export default SearchBar
