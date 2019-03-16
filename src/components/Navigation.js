import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => (
  <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#f7f7f7" }}>
    <Navbar.Brand href="#home" style={{ fontSize: "22px" }}>
      Jesse Perdue
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link
          href="#pricing"
          style={{ fontSize: "18px", marginRight: "20px" }}
        >
          Expertise
        </Nav.Link>
        <Nav.Link
          href="#features"
          style={{ fontSize: "18px", marginRight: "20px" }}
        >
          About
        </Nav.Link>
        <Nav.Link
          href="#pricing"
          style={{ fontSize: "18px", marginRight: "20px" }}
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          href="#features"
          style={{ fontSize: "18px", marginRight: "20px" }}
        >
          Blog
        </Nav.Link>
        <Nav.Link
          href="#pricing"
          style={{ fontSize: "18px", marginRight: "20px" }}
        >
          Contact
        </Nav.Link>
      </Nav>
      <Nav />
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
