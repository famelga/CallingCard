import React from "react";
import { Row, Container, Button, Col } from "react-bootstrap";

function audio(url) {
    // Define the action you want to perform when the image is clicked
    // For example, opening the link in a new tab/window
    window.open(url, '_blank');
  }

function Story () {
    return (
        <>
        <div id="Story" className="div">
            <br></br>
            <br></br>
            <h1 className="about-title"><b>Share Your Story</b></h1>
            <br></br>
        <Container>
            <Row className="text-center">
                <h4 className="storyText">Add your family’s story to the diaspora archive.</h4>
            </Row>
            <br></br>
            <br></br>
            <div className="d-grid gap-2">
      <Button variant="outline-light" size="lg" onClick={() => audio("https://docs.google.com/forms/d/15I4iNG4Q_4z7p8dEIWbeXTcYepxt6Km4D6GXwqC2HiY/viewform?edit_requested=true")}>
        Submit Audio
      </Button>
      <br></br>
      <br></br>     
      {/* <Button variant="outline-light" className="Archives"size="lg">
        Archives
      </Button> */}
    </div>
        </Container>
        <br></br>
        <br></br>     <br></br>     <br></br>
        </div>
        </>
    );
}
export default Story;