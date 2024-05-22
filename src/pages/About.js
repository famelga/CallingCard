import React from "react";
import { Row, Container, Image, Col } from "react-bootstrap";
import wwa from "../images/WWA.png";
import wwd from "../images/WWD.png";


function About() {
  return (
    <>
    <div id="About" className="div"></div>
    <br></br>
    <br></br>
    <h1 className="about-title" ><b>About Us</b></h1>
    <Container className="us">
        {/* <Row className="about-spacing"> */}
    <Row className="about-text">
        <Col >
      <Image  src={wwa}  alt="Calling Card logo" /> 
      </Col>
      <Col > 
      <Image className="wwd" src={wwd} roundedCircle alt="Calling Card logo" /> 
      </Col >
      </Row>

        <Row className="about-text" >
          <Col>
            <h1 >Who We Are</h1>
            </Col>
            <Col >
     <h1 >What We Do</h1>
 </Col>
        </Row>

        <Row className="about">
          <Col>
          <ul>
<h4 id="about" className="about-text">Calling Card LLC is a media company that develops and shares Ethiopian stories from across the globe.</h4>
</ul>
</Col>

<Col>

      <ul>
    <h4 className="about-text">Podcasting</h4> 
    <h4 className="about-text">Screenwriting</h4> 
    <h4 className="about-text">Film Production</h4> 
    </ul>

            </Col>
        </Row>

   
  
        </Container>


      {/* <Container className="about">
    <Col>
      <Card className="border">
        <Row className="about">
      <img src={wwa}  alt="Calling Card logo" /> 
      </Row>
        <Row className="about">
            <h1 className="about-title">Who We Are</h1>
        </Row>

        <Row className="about">
          <ul>
<h2 className="about-text">Calling Card LLC is a media company that develops and shares Ethiopian stories from across the globe.</h2>
</ul>
        </Row>
        </Card>
        </Col>

        <Col>
        <Card className="border">
        <Row className="about"> 
      <img src={wwd}  alt="Calling Card logo" /> 
      </Row >
 <Row className="about">
     <h1 className="about-title">What We Do</h1>
 </Row>

 <Row>
  <ul>
<h2 className="about-text">Podcasting</h2>
<h2 className="about-text">Screenwriting</h2>
<h2 className="about-text">Film Production</h2>
</ul>
 </Row>
 </Card>
        </Col>
  
        </Container> */}
        {/* <br></br>
        <br></br> */}
        {/* <br></br>
        <br></br> */}

    </>
  );
}
export default About;
