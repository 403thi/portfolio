import FlexContainer from "../../FlexContainer";

function FlexCenter({children}: any) {
    return (
        <FlexContainer width="99%">
            {children}
        </FlexContainer>
    )
}

export default FlexCenter