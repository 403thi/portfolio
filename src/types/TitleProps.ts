import { titleSizes } from "../theme"

export default interface TitleProps {
    children : any
    outlined ?: boolean
    blur     ?: boolean
    size     ?: 'small' | 'medium' | 'big' | 'extra'
    kana     ?: boolean
}