import {
    Section
} from './style';
import { colors } from '../../theme';
import InfoSectionProps from '../../types/InfoSectionProps';

function InfoSection({reverse, children}: InfoSectionProps) {
    return (
        <Section style={{
            background:             reverse ? colors.primary : colors.secondary,
            color:                 !reverse ? colors.primary : colors.secondary,
            WebkitTextStrokeColor: !reverse ? colors.primary : colors.secondary,
        }}>
            {children}
        </Section>
    )
}

export default InfoSection