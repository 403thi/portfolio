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
        <Title>thiago</Title>
        <Title kana size="extra">チアゴ</Title>
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
