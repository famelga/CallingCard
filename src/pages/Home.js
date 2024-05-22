import React from "react";
import { Row, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import voice from "../images/voice.png";
import About from "./About";
import Projects from "./Projects";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Voices from "../Videos/Voices.mp4";
import Podcast from "./Podcast";
import Stories from "./Stories";
import Connect from "./Connect";

function Home() {
  return (
    <>
    <Container >
      <Container >
        {/* <Row className="logo"> */}
        <Row id="background-video">
          <video autoPlay muted loop >
  <source src={Voices} type="video/mp4"/> 
</video>

            {/* <img className="logo" src={logo}  alt="Calling card logo" />
            </Row>
            </Container>

            <Container className="landing">

            <Row> 
     
            <h1 className="landing-text">Ethiopian voices live here.</h1>
            <img className="voice" src={voice}  alt="voice clipart" /> */}
          </Row>
      </Container>



      <About/>
      <Projects/>
      <Podcast/>
      <Stories/>
      {/* <Contact/> */}
      <Connect/>
      <Footer/>
      </Container>
      </>
  );
}
export default Home;
