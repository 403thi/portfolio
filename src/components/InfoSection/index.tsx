import {
    Section
} from './style';
import { colors } from '../../theme';
import InfoSectionProps from '../../types/InfoSectionProps';

function InfoSection({reverse, children, zIndex = "0", height = '100%'}: InfoSectionProps) {
    return (
        <Section style={{
            background:             reverse ? colors.primary : colors.secondary,
            color:                 !reverse ? colors.primary : colors.secondary,
            WebkitTextStrokeColor: !reverse ? colors.primary : colors.secondary,
            position: 'relative',
            zIndex: zIndex,
            height: height
        }}>
            {children}
        </Section>
    )
}

export default InfoSection