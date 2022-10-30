import InfoSection from "./components/InfoSection";
import Container from "./components/Container";
import Vignitte from "./components/Vignitte";
import Title from "./components/Title";


function App() {
  return (
    <>
    <Container>
      <Vignitte />
      <InfoSection>
        <Title kana size="extra" vertical>チアゴ</Title>
        <Title>thiago</Title>
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
