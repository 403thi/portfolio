import InfoSection from "./components/InfoSection";
import Container from "./components/Container";
import Vignitte from "./components/Vignitte";

function App() {
  return (
    <>
    <Container>
      <Vignitte />
      <InfoSection>aaaaaaa</InfoSection>
      <InfoSection reverse>b</InfoSection>
    </Container>
    </>
  )
}

export default App
