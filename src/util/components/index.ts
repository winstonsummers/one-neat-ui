import b from './Buttons'
import i from './Image'
import mp from './MessagePage'
import r from './Rating'

const Buttons = b
export const Button = Buttons.Button
export const DropButton = Buttons.DropButton
export const Image = i
export const Rating = r
export const MessagePage = mp

const CoreComp = {
    ...Buttons,
    Image,
    Rating,
    MessagePage,
}

export default CoreComp
