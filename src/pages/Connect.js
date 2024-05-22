import React from "react";
import { Row, Container, Col, Form, Image, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.png"; 
import X from "../images/twitter.png";
import youtube from "../images/yt.png";
import email from "../images/email.png";

function openSocials(url) {
    // Define the action you want to perform when the image is clicked
    // For example, opening the link in a new tab/window
    window.open(url, '_blank');
  }


  
function Contact() {

    const companyEmail = 'CallingCardllc@gmail.com';

    const message = () => {
      window.location.href = `mailto:${companyEmail}`;
    };

  return (
    <>
      <div id="Connect" className="projDiv"></div>
      <h1 className="about-title"><b>Connect With Us</b></h1>
      <br></br>
             
<Container>
      <Row className="icons"> 
      <Col xs={4} md={4} className="icons" >
          <Image src={email} rounded className="ig" onClick={message} style={{ cursor: 'pointer' }}
              alt="Email icon"
 />
        </Col>
        <Col xs={4} md={4} className="icons" >
          <Image src={instagram} rounded className="ig" onClick={() => openSocials("https://instagram.com/callingcardllc?utm_medium=copy_link")}
 />
        </Col>
        <Col xs={4} md={4} className="icons">
          <Image src={X} rounded className="icons" onClick={() => openSocials("https://twitter.com/callingcardllc?s=21")}
 />
        </Col>

        {/* ---YouTube--- */}
        {/* <Col xs={4} md={4} className="icons" >
          <Image src={youtube} rounded className="icons" onClick={() => openSocials("https://instagram.com/callingcardllc?utm_medium=copy_link")}
 />
        </Col> */}
        
      </Row>
    </Container>
    </>
  );
}
export default Contact;
