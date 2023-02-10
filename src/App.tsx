import InfoSection from "./components/InfoSection";
import Container from "./components/Container";
import Vignitte from "./components/Vignitte";
import Title from "./components/Title";
import FlexContainer from "./components/FlexContainer";
import OutlinedTextsContainer from "./components/OutlinedTextsContainer";
import Text from "./components/Text";
import ProjectSection from "./components/ProjectSection";
import Tech from "./components/Tech";
import { useRef } from "react";
import Footer from "./components/Footer";

function App() {

  const containerRef = useRef(null)
  
  return (
    <>
    <Container innerRef={containerRef}>
      <Vignitte />

      <InfoSection height="95%">
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
        <FlexContainer width="100%" mobileWidth="100%" wrap="wrap" direction="row">

          <FlexContainer width="50%" mobileWidth="100%" align="flex-end" height="60%" mobileHeight="30%">
            <OutlinedTextsContainer
              mainText={<Title size="medium">i'm thiago</Title>}
              vertical
              >
                <Title size="medium" outlined>about me</Title>
                <Title size="medium" outlined>i'm thiago</Title>
                <Title size="medium" outlined>about me</Title>
                <Title size="medium" outlined>i'm thiago</Title>
                <Title size="medium" outlined>about me</Title>
                <Title size="medium" outlined>i'm thiago</Title>
              </OutlinedTextsContainer>
          </FlexContainer>
      
          <FlexContainer direction="column" width="40%" mobileWidth="96%" mobileHeight="70%" padding="20px">
            <Title kana size="small">チアゴです！</Title>
            <Text>Hellooooo</Text>
            <Text>I'm Thiago, I'm 16 years old!</Text>
            <Text>I've been studying <strong>programming</strong> since January of 2021!</Text>
            <Text>I <strong>love</strong> coding and solving problems!</Text>
            <Text>I have experience with front-end and back-end development! However, I like back-end better ;)</Text>
            <Text>I've been studying english and japanese by myself at home.</Text>
            <Text><strong>Scroll down to see my projects!</strong></Text>
          </FlexContainer>
          
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
      title="the cinem"
      description="An app to watch online youtube videos with your friends!"
      githubUrl="https://github.com/403thi/dynamic-image-renderer"
      imgSource="https://github.com/403thi.png"
      reverse
      >
        <Tech>REACTJS</Tech>
        <Tech>TYPESCRIPT</Tech>
        <Tech>EXPRESSJS</Tech>
        <Tech>NODEJS</Tech>
        <Tech>YT IFRAME API</Tech>
        <Tech>SOCKET.IO</Tech>
        <Tech>OPEN SOURCE</Tech>
      </ProjectSection>

      <Footer />
    </Container>
    </>
  )
}

export default App
