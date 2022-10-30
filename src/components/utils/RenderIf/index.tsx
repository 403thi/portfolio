import RenderIfProps from "../../../types/RenderIfProps";

function RenderIf({condition, children}: RenderIfProps) {
    return (
        <>
        {
            condition?
            children
            : <></>
        }
        </>
    )
}

export default RenderIf