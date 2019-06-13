import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => (
  <section id="contact">
    <Container className="contact_wrapper my-5">
      <Row className="my-5">
        <Col>
          <h1>Lets get in touch</h1>
        </Col>
      </Row>
      <div className="form_wrapper">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <Row className="d-flex justify-content-center">
            <Col lg="4">
              <p>
                <input type="text" name="name" placeholder="Name" />
              </p>
            </Col>
            <Col lg="4">
              <p>
                <input type="email" name="email" placeholder="Email" />
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col lg="8">
              <p>
                <textarea name="message" placeholder="Enter Message" />
              </p>
              <p>
                <Button type="submit">Send</Button>
              </p>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  </section>
);

export default Contact;
