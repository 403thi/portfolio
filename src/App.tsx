import InfoSection from "./components/InfoSection"
import Container from "./components/Container"

function App() {
  return (
    <Container>
      <InfoSection key={'a'}>a</InfoSection>
      <InfoSection reverse key={'b'}>b</InfoSection>
    </Container>
  )
}

export default App
