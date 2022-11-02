import InfoSection from "./components/InfoSection";
import Container from "./components/Container";
import Vignitte from "./components/Vignitte";
import Title from "./components/Title";
import FlexContainer from "./components/FlexContainer";
import OutlinedTextsContainer from "./components/OutlinedTextsContainer";

function App() {
  return (
    <>
    <Container>
      <Vignitte />
      <InfoSection>
        <FlexContainer>
          <OutlinedTextsContainer
          mainText={<Title kana vertical>チアゴ</Title>}
          >
            <Title kana vertical outlined>チアゴ</Title>
            <Title kana vertical outlined>チアゴ</Title>
            <Title kana vertical outlined>チアゴ</Title>
            <Title kana vertical outlined>チアゴ</Title>
          </OutlinedTextsContainer>
          <OutlinedTextsContainer
          mainText={<Title size="medium">thiago</Title>}
          vertical
          >
              <Title size="medium" outlined >thiago</Title>
              <Title size="medium" outlined >thiago</Title>
              <Title size="medium" outlined >thiago</Title>
              <Title size="medium" outlined >thiago</Title>
          </OutlinedTextsContainer>
        </FlexContainer>
      </InfoSection>
      <InfoSection reverse>
        <Title outlined>thiago</Title>
        <Title kana size="extra" outlined>チアゴ</Title>
      </InfoSection>
    </Container>
    </>
  )
}

export default App
