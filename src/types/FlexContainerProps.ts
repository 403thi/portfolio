import * as CSS from "csstype";

export default interface FlexContainerProps {
    align       ?: CSS.Property.AlignItems
    justify     ?: CSS.Property.JustifyContent
    children     : any
    width       ?: string
    mobileWidth ?: string
    height      ?: string
    gap         ?: string
    direction   ?: 'row' | 'column'
    wrap        ?: CSS.Property.FlexWrap
}
