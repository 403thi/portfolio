import {
    TextContent,
} from './style';

interface TextProps {
    children: any
}

function Text({children}: TextProps) {
    return (
        <TextContent>
            {children}
        </TextContent>
    )
}

export default Text