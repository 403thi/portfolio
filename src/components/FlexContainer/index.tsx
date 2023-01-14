import FlexContainerProps from "../../types/FlexContainerProps";
import styled from "@emotion/styled";

const FlexContainer = styled.div(({
            align = 'center', justify = 'center',
            width = '60%', height = '100%',
            gap = '0',   direction = 'row',
            wrap = 'nowrap', mobileWidth = '0%',
            padding = '0', mobileHeight = ''
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
                padding: padding,
                '@media only screen and (max-width: 450px)': {
                    width: mobileWidth,
                    height: mobileHeight,
                }
        }))

export default FlexContainer