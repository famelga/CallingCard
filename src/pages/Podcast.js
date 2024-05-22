import React from "react";
import { Row, Container, Image, Col } from "react-bootstrap";
import podcast from "../images/podcast.png";

function Podcast () {
    return (
        <>
        <div id="Podcast" className="div">
            <br></br>
            <br></br>
            <h1 className="about-title"><b>Podcast</b></h1>
            <br></br>
        <Container className="text-center">
            <Row >
                <h4 className="ceremonyText">There are currently no episodes. Check back soon!</h4>
            </Row>
            <br></br>
            <br></br>
            <Row  >
                {/* <Col md={{ span: 6, offset: 3}}> */}
            <Image
            className="podcastImg" 
              src={podcast}
              alt="podcast Image"
            />
            {/* </Col> */}
            </Row>
            <br></br>
            <br></br>
        </Container>
        </div>
        </>
    );
}
export default Podcast;