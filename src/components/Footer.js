import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const footerStyle = {
  marginLeft: "50px",
  color: "white"
};

const Footer = () => (
  <footer>
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <h5 class="my-3">Self Made</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 class="my-3">Self Made</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 class="my-3">Self Made</h5>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
