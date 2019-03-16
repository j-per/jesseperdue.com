import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Social extends React.Component {
  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-center" p>
          <Col md="auto">
            <a href="#">
              <i className="fab fa-github fa-4x" />
            </a>
          </Col>
          <Col md="auto">
            <a href="#">
              <i className="fab fa-twitter fa-4x" />
            </a>
          </Col>
          <Col md="auto">
            <a href="#">
              <i className="fab fa-codepen fa-4x" />
            </a>
          </Col>
          <Col md="auto">
            <a href="#">
              <i className="fas fa-envelope fa-4x" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Social;
