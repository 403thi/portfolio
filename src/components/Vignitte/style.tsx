import styled from "@emotion/styled";

export const VignitteContainer = styled.span({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: "1"
})

export const Border = styled.span({
    width: '110vw',
    height: '110vh',
    outline: '240px solid #000000',
    borderRadius: '20%',
    filter: 'blur(100px)',
    pointerEvents: 'none',
    opacity: '1',
    '@media only screen and (max-width: 450px)': {
        opacity: '0.65',
    },
    transition: 'opacity 1s',
})