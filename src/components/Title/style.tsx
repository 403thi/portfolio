import styled from "@emotion/styled";
import TitleProps from "../../types/TitleProps";
import { titleSizes, smallTitleSizes } from "../../theme";

export const TitleContainer = styled.div(({kana, monospace, size, vertical}: TitleProps) => {
    size = size ?? 'medium'

    const dynamicVertical: React.CSSProperties = vertical? {
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
    } : {}

    return {
        fontFamily: kana?      "'BIZ UDPMincho'" 
                    : monospace? "'Fira Code'"
                    :            "'UnifrakturMaguntia'",
        fontSize: titleSizes[size],
        display: 'grid',
        margin: '0px',
        ...dynamicVertical,
        '@media only screen and (max-width: 700px)': {
            fontSize: smallTitleSizes[size]
        },
    }
})

export const TitleContent = styled.h1((props: any) => {
    const dynamicOutlined: React.CSSProperties = props.outlined? {
        WebkitTextStrokeWidth: '2px',
        color: 'transparent',
        opacity: '0.75',
    } : {}

    return {
        fontWeight: '400',
        gridColumn: '1',
        gridRow: '1',
        margin: '0px',
        zIndex:  '1',
        ...dynamicOutlined,
    }
})

export const TextBlur = styled.h1({
    filter: 'blur(0.458rem)',
    opacity: '0.75',
    pointerEvents: 'none',
    gridColumn: '1',
    gridRow: '1',
    mixBlendMode: 'hard-light',
    margin: '0px',
})