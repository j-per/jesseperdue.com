import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <section className="FooterContent_wrapper">
        <Container className="FooterContent_Container my-5">
          <Row>
            <Col>
              <a href="#" target="_blank">
                <i className="fab fa-github fa-2x FooterContent_icon" />
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-codepen fa-2x FooterContent_icon" />
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-twitter fa-2x FooterContent_icon" />
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-linkedin fa-2x FooterContent_icon" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Footer;
