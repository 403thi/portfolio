import FlexContainerProps from "../../types/FlexContainerProps";

function FlexContainer({align = 'center', justify = 'center',
                        width = '60%', height = '100%',
                        gap = '0',   direction = 'row',
                        children,
                        }: FlexContainerProps) {
    return (
        <div style={{
            display: 'flex',
            alignItems: align,
            justifyContent: justify,
            width: width,
            height: height,
            margin: '0px',
            gap: gap,
            flexDirection: direction
        }}>
            {children}
        </div>
    )
}

export default FlexContainer