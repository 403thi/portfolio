import InfoSection from "../InfoSection";
import FlexContainer from "../FlexContainer";
import Title from "../Title";
import Text from "../Text";
import LinkIcon from "../LinkIcon";
import ProjectSectionProps from "../../types/ProjectSectionProps";

function ProjectSection({
    title, description, githubUrl,
    children, imgSource, altSource="",
    reverse
}: ProjectSectionProps) {
    return (
        <InfoSection reverse={reverse}>
            <FlexContainer wrap="wrap" width="100%" mobileWidth="100%" >
                <FlexContainer width="100%" mobileWidth="100%" height="min-content" wrap="wrap" gap="35px" direction="row">

                    <FlexContainer width="40%" mobileWidth="90%">
                        <img src={imgSource} alt={altSource} width="100%"/>
                    </FlexContainer>

                    <FlexContainer width="50%" mobileWidth="100%" height="min-content" direction="column">
                        <FlexContainer direction="column" mobileWidth="100%" gap="2px">
                            <Title size="small">
                                {title} <LinkIcon href={githubUrl} className="fa-brands fa-github"/>
                            </Title>
                            <Text>{description}</Text>
                            <FlexContainer justify="flex-start" align="flex-start" gap="1.5px" width="99%" mobileWidth="100%" height="min-content" wrap="wrap">
                                {children}
                            </FlexContainer>
                        </FlexContainer>
                    </FlexContainer>

                </FlexContainer>

            </FlexContainer>
        </InfoSection>
    )
}

export default ProjectSection