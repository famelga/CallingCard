import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import ceremony from "../images/ceremony.png";
import podcast from "../images/podcast.png";

function Projects() {
  return (
    <>
      <div id="Projects" className="projDiv"></div>
      <h1 className="about-title"><b>Projects</b></h1>
      <br></br>
      <br></br>


      <Container className="text-center" >
        <Row className="coffee">
          <Col >
            <Image
              className="ceremonyImg"
              src={ceremony}
              alt="Ceremony Image"
            />
          </Col>

          <Col className="ceremonyText" >
            <ul >

              <h1 >Ceremony</h1>
<br></br>
              <h4 className="projText">
                Ceremony is a short film that showcases an encounter between two
                strangers over traditional Ethiopian coffee.
              </h4>
            </ul>
          </Col>
        </Row>
      </Container>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

      <Container className="text-center">
        <Row className="beginning">
    

          <Col className="ceremonyText">
            <ul >
              
              <h1>Start From the Beginning</h1>
<br></br>
              <h4 className="projText">
              Through a series of interview conversations, Start from the
                Beginning explores the journeys of an Ethiopian Diaspora family
                group in the US, how they got here, what they found when they
                arrived, and why each of them decided to stayed, or didn’t.
              </h4>
            </ul>
          </Col>

          <Col >
            <Image
              
              src={podcast}
              alt="podcast Image"
            />
          </Col>

        </Row>
      </Container>

      <br></br><br></br><br></br>

      {/* <Container className="ceremony">
        <Row className="ceremony">
          <Col className="ceremony">
            <Image
              className="ceremonyImg"
              src={ceremony}
              alt="Ceremony Image"
            />
          </Col>

          <Col className="ceremony">
            <ul className="ceremonyText">

              <h2 className="ceremonyText">Ceremony</h2>

              <p className="ceremonyText">
                Ceremony is a short film that showcases an encounter between two
                strangers over traditional Ethiopian coffee.
              </p>
            </ul>
          </Col>
        </Row>
      </Container>

<br></br>
<br></br>

      <Container className="ceremony">
        <Row className="ceremony">
    

          <Col className="ceremony">
            <ul className="ceremonyText">
              
              <h2 className="podcastText">Start From the Beginning</h2>

              <p className="podcastText">
              Through a series of interview conversations, Start from the
                Beginning explores the journeys of an Ethiopian Diaspora family
                group in the US, how they got here, what they found when they
                arrived, and why each of them decided to stayed, or didn’t.
              </p>
            </ul>
          </Col>

          <Col className="ceremony">
            <Image
              className="podcastImg"
              src={podcast}
              alt="podcast Image"
            />
          </Col>

        </Row>
      </Container> */}
{/* 
      <Container>
        <Col>
          <Row className="about">
            <h2 className="about-title">Start From the Beginning</h2>
          </Row>

          <Row>
            <Col>
              <h3 className="ceremonyText">
                Through a series of interview conversations, Start from the
                Beginning explores the journeys of an Ethiopian Diaspora family
                group in the US, how they got here, what they found when they
                arrived, and why each of them decided to stayed, or didn’t.
              </h3>
            </Col>
            <Col>
              <Image className="podcastImg" src={podcast}></Image>
            </Col>
          </Row>
        </Col>
      </Container> */}
    </>
  );
}
export default Projects;
