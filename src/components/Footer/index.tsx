import InfoSection from "../InfoSection";
import FlexContainer from "../FlexContainer";
import Text from "../Text";
import Title from "../Title";
import {
    Link
} from "./style";

function Footer() {
    return (
        <>
        <InfoSection reverse>
            <FlexContainer width="100%" direction="column" mobileWidth="100%" >
                <Title size="extra-small" monospace>
                    <Link href="https://github.com/403thi" target="_blank">
                        github
                    </Link>
                </Title>
                <Title size="extra-small" monospace>
                    <Link href="https://github.com/403thi" target="_blank">
                        linkedin  (not yet)
                    </Link>
                </Title>
                <Text>
                    contact me: thidotpy@gmail.com
                </Text>
                <Text>
                    discord: 403thi#2647
                </Text>
            </FlexContainer>
        </InfoSection>
        </>
    )
}

export default Footer