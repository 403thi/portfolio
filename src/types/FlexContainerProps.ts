import * as CSS from "csstype";

export default interface FlexContainerProps {
    align   ?: CSS.Property.AlignItems
    justify ?: CSS.Property.JustifyContent
    children : any
}
