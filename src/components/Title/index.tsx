import { titleSizes } from "../../theme";
import TitleProps from "../../types/TitleProps";
import {
    TextBlur,
    TitleContent,
} from './style';
import RenderIf from "../utils/RenderIf";

function Title({children, outlined,
                blur = true, size = 'big',
                kana = false}: TitleProps) {
    return (
        <div style={{
            fontFamily: kana? "'BIZ UDPMincho'" : "'UnifrakturMaguntia'",
            fontSize: titleSizes[size] ?? 'medium',
            display: 'grid'
        }}>
        <RenderIf condition={blur && !outlined}>
            <TextBlur>
                {children}
            </TextBlur>
        </RenderIf>
        <TitleContent outlined={outlined}>
            {children}
        </TitleContent>
        </div>
    )
}

export default Title