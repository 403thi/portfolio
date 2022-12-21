import InfoSection from "./components/InfoSection";
import Container from "./components/Container";
import Vignitte from "./components/Vignitte";
import Title from "./components/Title";
import FlexContainer from "./components/FlexContainer";
import OutlinedTextsContainer from "./components/OutlinedTextsContainer";
import Text from "./components/Text";
import FlexCenter from "./components/utils/FlexCenter";

function App() {
  return (
    <>
    <Container>
      <Vignitte />
      <InfoSection>
        <FlexCenter>
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
        </FlexCenter>
      </InfoSection>
      <InfoSection reverse zIndex="-1">
       <FlexCenter>
        <FlexContainer align="flex-start" height="60%">
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
        <FlexContainer>
            <Title kana size="big">チアゴ</Title>
            <Text>this project was made with React</Text>
        </FlexContainer>
       </FlexCenter>
      </InfoSection>
    </Container>
    </>
  )
}

export default App
