import TitleProps from "../../types/TitleProps";
import {
    TitleContent,
    TitleContainer
} from './style';

function Title({children, outlined,
                size = 'big', kana = false,
                vertical = false, monospace = false
            }: TitleProps) {

    return (
        <TitleContainer kana={kana} size={size} monospace={monospace} vertical={vertical}>
            <TitleContent outlined={outlined} vertical={vertical}>
                {children}
            </TitleContent>
        </TitleContainer>
    )
}

export default Title