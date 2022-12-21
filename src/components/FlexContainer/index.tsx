import FlexContainerProps from "../../types/FlexContainerProps";
import styled from "@emotion/styled";

const FlexContainer = styled.div(({
            align = 'center', justify = 'center',
            width = '60%', height = '100%',
            gap = '0',   direction = 'row',
            wrap = 'nowrap', mobileWidth = '0%'
            }: FlexContainerProps)  =>
            ({
                display: 'flex',
                alignItems: align,
                justifyContent: justify,
                width: width,
                height: height,
                margin: '0px',
                gap: gap,
                flexWrap: wrap,
                flexDirection: direction,
                '@media only screen and (max-width: 450px)': {
                    width: mobileWidth,
                    margin: '2px'
                }
        }))

export default FlexContainer