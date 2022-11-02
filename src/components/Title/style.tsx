import styled from "@emotion/styled";

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