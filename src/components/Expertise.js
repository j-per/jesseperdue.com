import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Expertise.css";
import Zoom from "react-reveal/Zoom";

const ExpertiseSection = () => (
  <Container className="my-5 test">
    <Row className="my-5">
      <Col>
        <h1>Expertise</h1>
      </Col>
    </Row>
    <Row>
      <Col lg>
        <h3>Design</h3>
        <div className="line" />
        <p style={{ lineHeight: 2 }}>
          A strong website starts with a simple yet powerful design. First, I'll
          create a wireframe to structure the content out on the page suited to
          the needs of your business and your customers. Next, I'll turn that
          wireframe into a mockup with custom colors, fonts, photos, and a
          layout that brings the website to life. After we perfect the design ,
          we will proceed to the devlopment process.
        </p>
      </Col>
      <Col lg>
        <h3>Develop</h3>
        <div className="line" />
        <p style={{ lineHeight: 2 }}>
          The development process is another crucial component in bringing a
          unique experience to your customers. I use the latest and greatest web
          technologies to make your website blazing fast, accessible, and
          interactive. I can build you a website, an e-commerce platform, a blog
          or anything else with my versatile background in modern web
          technologies.
        </p>
      </Col>
      <Col lg>
        <h3>Train</h3>
        <div className="line" />
        <p style={{ lineHeight: 2 }}>
          If your business needs require the content of your website to be
          updated frequently, I can provide training with a content management
          system (CMS) like Wordpress or Drupal. Updating photos, writing new
          blog posts and changing the content on your website is a great way to
          keep customers engaged. Learning to update the content of your site is
          important and saves you the cost of having to contact a developer
          every time changes need to be made.
        </p>
      </Col>
    </Row>
  </Container>
);

export default ExpertiseSection;
