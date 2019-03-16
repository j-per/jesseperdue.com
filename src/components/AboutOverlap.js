import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import "./AboutOverlap.css";

class AboutOverlap extends React.Component {
  render() {
    return (
      <div className="overlap_wrapper">
        <Container
          className="justify-content-center overlap"
          style={{ textAlign: "center" }}
        >
          <Row>
            <Col md className="col_1">
              <Zoom delay={800} duration={1500}>
                <i className="fas fa-pencil-alt fa-4x my-5" />
              </Zoom>
              <h2>Designer</h2>
              <p className="my-4">
                I enjoy simplistic, clean, powerful designs that empower users.
              </p>
              <h4 className="my-4" style={{ color: "#047afb" }}>
                Design Tools:
              </h4>
              <li>Adobe XD</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Pen & Paper</li>
              <li>Sketch</li>
              <li className="mb-5">Photosthop</li>
            </Col>
            <Col md className="col_2">
              <Zoom delay={1000} duration={1500}>
                <i className="fas fa-code fa-4x my-5" />
              </Zoom>
              <h2>Front-End Developer</h2>
              <p className="my-4">
                I love building websites and apps writing clean, concise,
                elegant code.
              </p>
              <h4 className="my-4" style={{ color: "#047afb" }}>
                Developer Tools:
              </h4>
              <li>VS Code</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Codepen</li>
              <li>Github</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li className="mb-5">Photosthop</li>
            </Col>
            <Col md className="col_3">
              <Zoom delay={1200} duration={1500}>
                <i className="fas fa-chalkboard-teacher fa-4x my-5" />
              </Zoom>
              <h2>Trainer</h2>
              <p className="my-4">
                I have a background in ed tech and love teaching people new
                skills.
              </p>
              <h4 className="my-4" style={{ color: "#047afb" }}>
                CMS:
              </h4>
              <li>Wordpress</li>
              <li className="mb-5">Drupal</li>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutOverlap;
