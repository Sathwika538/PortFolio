import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {  Link } from "react-router-dom";
import SatResume from "./Resumee.pdf";
function CollapsibleExample() {
  return (
    <div>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark" className="justify-content-center">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>SatThings</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{position:"absolute",
                                            right:"100px"
                                               }}>
                                               
            <Nav.Link as={Link} to={"/about"} style={{paddingLeft:"50px" }}>About</Nav.Link>
            <Nav.Link as={Link} to={"/projects"}  style={{paddingLeft:"50px" }}>Projects</Nav.Link>
            <Nav.Link href={SatResume} target={"_blank"} rel={"noreferrer"} style={{paddingLeft:"50px" }}>Resume</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}  style={{paddingLeft:"50px" }}>Contact</Nav.Link>
           
          </Nav>
          <Nav>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default CollapsibleExample;
