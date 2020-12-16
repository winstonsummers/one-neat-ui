import b from './Buttons'
import i from './Image'
import r from './Rating'
import sb from './SearchBar'
import ac from './ActionControls'

export const SearchBar = sb  
const Buttons = b
export const Button = Buttons.Button
export const DropButton = Buttons.DropButton
export const Image = i
export const Rating = r
export const ActionControls = ac

const CoreComp = {
    ...Buttons,
    Image,
    Rating,
    SearchBar,
    ActionControls,
}

export default CoreComp
