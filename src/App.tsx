import InfoSection from "./components/InfoSection";
import Container from "./components/Container";
import Vignitte from "./components/Vignitte";
import Title from "./components/Title";
import FlexContainer from "./components/FlexContainer";
import OutlinedTextsContainer from "./components/OutlinedTextsContainer";
import Text from "./components/Text";
import ProjectSection from "./components/ProjectSection";
import Tech from "./components/Tech";

function App() {
  return (
    <>
    <Container>
      <Vignitte />

      <InfoSection>
        <FlexContainer width="99%">
          <FlexContainer justify="flex-start" gap="2vw">
            <OutlinedTextsContainer
            mainText={<Title kana vertical>チアゴ</Title>}
            >
              <Title kana vertical outlined>チアゴ</Title>
              <Title kana vertical outlined>チアゴ</Title>
              <Title kana vertical outlined>チアゴ</Title>
              <Title kana vertical outlined>チアゴ</Title>
            </OutlinedTextsContainer>
            
            <FlexContainer height="min-content" justify="flex-start" align="flex-start" direction="column">
              <OutlinedTextsContainer
              mainText={<Title size="medium">thiago</Title>}
              vertical
              >
                  <Title size="medium" outlined >thiago</Title>
                  <Title size="medium" outlined >thiago</Title>
                  <Title size="medium" outlined >thiago</Title>
                  <Title size="medium" outlined >thiago</Title>
              </OutlinedTextsContainer>
              <Title size="extra-small" monospace>software developer</Title>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </InfoSection>

      <InfoSection reverse zIndex="-1">
        <FlexContainer width="100%" mobileWidth="100%" wrap="wrap" direction="column">
          <FlexContainer height="60%" align="flex-start">
            <OutlinedTextsContainer
              mainText={<Title size="medium">projects</Title>}
              vertical
              >
                <Title size="medium" outlined>projects</Title>
                <Title size="medium" outlined>projects</Title>
                <Title size="medium" outlined>projects</Title>
                <Title size="medium" outlined>projects</Title>
              </OutlinedTextsContainer>
          </FlexContainer>

          <div style={{
            
          }}>
            <Title size="extra-small">dynamic image renderer</Title>
            <Title size="extra-small">dynamic image renderer</Title>
          </div>

          

            {/* TODO: transform this div in a Footer component */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <Title kana size="small">チアゴ</Title>
              <Text>this project was made with React</Text>
            </div>
          
       </FlexContainer>
      </InfoSection>

      <ProjectSection
      title="dynamic image renderer"
      description="An API that generate an image dynamically with URL parameters."
      githubUrl="https://github.com/403thi/dynamic-image-renderer"
      imgSource="https://dynamic-image-renderer.vercel.app/api?preset=default&title=dynamic%20image%20renderer&subtitle=&textAnimation=pulse&backgroundColor=%23212529&titleBgOpacity=0&titleColor=%23f5e5d8&height=350"
      reverse={false}
      >
        <Tech>NODEJS</Tech>
        <Tech>TYPESCRIPT</Tech>
        <Tech>EXPRESSJS</Tech>
        <Tech>EJS</Tech>
        <Tech>VERCEL</Tech>
        <Tech>OPEN SOURCE</Tech>
      </ProjectSection>

      <ProjectSection
      title="dynamic image renderer"
      description="An API that generate an image dynamically with URL parameters."
      githubUrl="https://github.com/403thi/dynamic-image-renderer"
      imgSource="https://github.com/403thi.png"
      reverse
      >
        <Tech>NODEJS</Tech>
        <Tech>TYPESCRIPT</Tech>
        <Tech>EXPRESSJS</Tech>
        <Tech>EJS</Tech>
        <Tech>VERCEL</Tech>
        <Tech>OPEN SOURCE</Tech>
      </ProjectSection>

    </Container>
    </>
  )
}

export default App
