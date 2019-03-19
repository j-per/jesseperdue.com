import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = () => (
  <section id="portfolio">
    <Container className="portfolio_wrapper">
      <Row>
        <Col className="my-5">
          <h1>Portfolio</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md
          className="portfolio_box_1 d-flex justify-content-center align-items-center m-3"
        >
          <a href="#">
            <h4>Some Website</h4>
          </a>
        </Col>
        <Col
          md
          className="portfolio_box_2 d-flex justify-content-center align-items-center m-3"
        >
          <a href="#">
            <h4>Some Website</h4>
          </a>
        </Col>
        <Col
          md
          className="portfolio_box_3 d-flex justify-content-center align-items-center m-3"
        >
          <a href="#">
            <h4 className="">Some Website</h4>
          </a>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Portfolio;
