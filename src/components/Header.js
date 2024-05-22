import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png";

// import NavDiv from "./HeaderBg";

const AppNavbar = () => {
  return (
    <>
      {/* <NavDiv/> */}
      <div className="navDiv">
        <Navbar className="navbar" activeKey="/home" id="home" sticky="top">
          <Container className="navbar">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav id="navbar" activeKey="/home">
                <Nav.Item className="item">
                  <Nav.Link className="tab " href="/">
                    Home
                  </Nav.Link>
                </Nav.Item >
                <Nav.Item className="item">
                  <Nav.Link className="tab" href="#About">
                    About Us
                  </Nav.Link>
                </Nav.Item >
                <Nav.Item className="item">
                  <Nav.Link className="tab" href="#Projects">
                    Projects
                  </Nav.Link>
                </Nav.Item >
                <Navbar.Brand href="/">
                  <Image className="navbar-logo" src={logo} alt="logo" />
                </Navbar.Brand>
                <Nav.Item className="item">
                  <Nav.Link className="tab" href="#Podcast">
                    Podcast
                  </Nav.Link>
                </Nav.Item >
                <Nav.Item className="item">
                  <Nav.Link className="tab" href="#Story">
                    Archives
                  </Nav.Link>
                </Nav.Item >
                <Nav.Item className="item">
                  <Nav.Link className="tab" href="#Connect">
                    Connect
                  </Nav.Link>
                </Nav.Item >

                <NavDropdown id="dropdown" title="Menu" >
               
                  <NavDropdown.Item className="dropDown" href="#About">About Us</NavDropdown.Item>
                  <NavDropdown.Item className="dropDown" href="#Projects">Projects</NavDropdown.Item>
                  <NavDropdown.Item className="dropDown" href="#Podcast">Podcast</NavDropdown.Item>
                  <NavDropdown.Item className="dropDown" href="#Connect">Connect</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default AppNavbar;
