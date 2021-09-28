import { SearchOutlined } from '@ant-design/icons'
import React from 'react'

interface ISearchBar {
    onSearch: (value: string) => void
}

const SEARCH_FLAVOR_TEXT = [
    'What\'s your drink?',
    'Need a cold one?',
    'Pick your Poison',
    'How about a brew?',
    'BEER!',
    'One Neat Search',
    'Got a Brew\'ski?',
    'Its 5\'o\'clock somewhere...',
    'Beer for the horses...',
    'Cheers',
]

const getFlavorText = (): string => {
    const { floor, random } = Math
    const randomIndex = floor(random() * SEARCH_FLAVOR_TEXT.length)
    return SEARCH_FLAVOR_TEXT[randomIndex]
}

const SearchBar: React.FC<ISearchBar> = (props) => {
    const [searchValue, setValue] = React.useState('')

    const onSearch = (
        e:
            | React.FormEvent<HTMLFormElement>
            | React.MouseEvent<HTMLSpanElement, MouseEvent>,
    ) => {
        e.preventDefault()
        props.onSearch(searchValue)
        setValue('')
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className='search-bar-container'>
            <form onSubmit={onSearch}>
                <SearchOutlined
                    onClick={onSearch}
                    className='bordered stop-focus'
                />
                <input
                    type='text'
                    onChange={onChange}
                    value={searchValue}
                    placeholder={getFlavorText()}
                    className='focusable'
                />
            </form>
        </div>
    )
}

export default SearchBar
