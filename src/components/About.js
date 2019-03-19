import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import Jesse from "../pictures/jesse.png";

const About = () => (
  <section className="about_container" id="about">
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="my-5">Hey there, my name's Jesse</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img
            src={Jesse}
            alt="picture of Jesse and wife"
            className="custom_photo"
          />
        </Col>
      </Row>
      <Row
        className="py-5 justify-content-center"
        style={{ textAlign: "center" }}
      >
        <Col lg={7}>
          <p style={{ lineHeight: 2 }}>
            I've been a web developer for about a year and love bringing ideas
            to life through the web. I'm actively looking for a front-end
            developer position and work part time as a freelance developer. I'm
            a family man based out of Menifee, California and would love the
            opportunity to work with you.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
