import styled from "@emotion/styled";

export const VignitteContainer = styled.span({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: "1",
})

export const Border = styled.span({
    width: '100vw',
    height: '100vh',
    boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 0.8)',
    pointerEvents: 'none',
    opacity: '1',
    '@media only screen and (max-width: 450px)': {
        opacity: '0.60',
    },
    transition: 'opacity 1s',
})