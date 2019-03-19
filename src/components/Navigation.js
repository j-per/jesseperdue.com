import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <Navbar.Brand href="#home" style={{ fontSize: "22px" }}>
          Jesse Perdue
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="expertise"
              spy={true}
              smooth="easeInOutQuint"
              offset={-45}
              duration={1000}
            >
              <Nav.Link style={{ fontSize: "18px", marginRight: "20px" }}>
                Expertise
              </Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth="easeInOutQuint"
              duration={1000}
            >
              <Nav.Link style={{ fontSize: "18px", marginRight: "20px" }}>
                About
              </Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth="easeInOutQuint"
              duration={1000}
            >
              <Nav.Link style={{ fontSize: "18px", marginRight: "20px" }}>
                Portfolio
              </Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth="easeInOutQuint"
              duration={1000}
            >
              <Nav.Link style={{ fontSize: "18px", marginRight: "20px" }}>
                Contact
              </Nav.Link>
            </Link>
          </Nav>
          <Nav />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
