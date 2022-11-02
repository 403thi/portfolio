import FlexContainerProps from "../../types/FlexContainerProps";

function FlexContainer({align = 'center', justify = 'center',
                        children, 
                        }: FlexContainerProps) {
    return (
        <div style={{
            display: 'flex',
            alignItems: align,
            justifyContent: justify,
            width: '100%', // temp
            height: '100%',
        }}>
            {children}
        </div>
    )
}

export default FlexContainer