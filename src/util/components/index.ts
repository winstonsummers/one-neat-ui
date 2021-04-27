import ac from './ActionControls'
import b from './Buttons'
import i from './Image'
import r from './Rating'

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
    ActionControls,
}

export default CoreComp
