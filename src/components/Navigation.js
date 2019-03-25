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
        <Navbar.Brand style={{ fontSize: "22px" }}>Jesse Perdue</Navbar.Brand>
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
              style={{ fontSize: "18px", marginRight: "20px" }}
              role="button"
              className="nav-link"
            >
              Expertise
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth="easeInOutQuint"
              duration={1000}
              style={{ fontSize: "18px", marginRight: "20px" }}
              role="button"
              className="nav-link"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth="easeInOutQuint"
              duration={1000}
              style={{ fontSize: "18px", marginRight: "20px" }}
              role="button"
              className="nav-link"
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth="easeInOutQuint"
              duration={1000}
              style={{ fontSize: "18px", marginRight: "20px" }}
              role="button"
              className="nav-link"
            >
              Contact
            </Link>
          </Nav>
          <Nav />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
