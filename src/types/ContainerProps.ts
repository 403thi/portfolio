import { MutableRefObject } from "react";

export default interface ContainerProps {
    children:  any
    innerRef: MutableRefObject<HTMLElement | null>
}