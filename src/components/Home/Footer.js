import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <section className="FooterContent_wrapper" id="footer">
        <Container className="FooterContent_Container my-5">
          <Row>
            <Col>
              <a href="https://github.com/j-per">
                <i className="fab fa-github fa-2x FooterContent_icon" />
              </a>
              <a href="https://codepen.io/jpound">
                <i className="fab fa-codepen fa-2x FooterContent_icon" />
              </a>
              <a href="https://twitter.com/jesse90perdue">
                <i className="fab fa-twitter fa-2x FooterContent_icon" />
              </a>
              <a href="www.linkedin.com/in/jesse-perdue-1aa8a996">
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
