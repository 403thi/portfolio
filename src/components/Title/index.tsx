import TitleProps from "../../types/TitleProps";
import {
    TextBlur,
    TitleContent,
    TitleContainer
} from './style';
import RenderIf from "../utils/RenderIf";

function Title({children, outlined,
                blur = true, size = 'big',
                kana = false, vertical = false,
                monospace = false
            }: TitleProps) {

    

    return (
        <TitleContainer kana={kana} size={size} monospace={monospace} vertical={vertical}>
            <RenderIf condition={blur && !outlined}>
                <TextBlur>
                    {children}
                </TextBlur>
            </RenderIf>
            <TitleContent outlined={outlined} vertical={vertical}>
                {children}
            </TitleContent>
        </TitleContainer>
    )
}

export default Title