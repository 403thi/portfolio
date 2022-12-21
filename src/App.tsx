import InfoSection from "./components/InfoSection";
import Container from "./components/Container";
import Vignitte from "./components/Vignitte";
import Title from "./components/Title";
import FlexContainer from "./components/FlexContainer";
import OutlinedTextsContainer from "./components/OutlinedTextsContainer";
import Text from "./components/Text";

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
          
          <div >
              <OutlinedTextsContainer
                mainText={<Title size="medium">projects</Title>}
                vertical
                >
                  <Title size="medium" outlined>projects</Title>
                  <Title size="medium" outlined>projects</Title>
                  <Title size="medium" outlined>projects</Title>
                  <Title size="medium" outlined>projects</Title>
                </OutlinedTextsContainer>        
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

    </Container>
    </>
  )
}

export default App
