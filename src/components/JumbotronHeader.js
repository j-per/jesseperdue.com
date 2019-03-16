import React from "react";
import "./JumbotronHeader.css";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

class JumbotronHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      words: ["Create", "Code", "Design", "Develop", "Teach"]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter < 5) {
        this.setState({ counter: this.state.counter + 1 });
        if (this.state.counter === 5) {
          this.setState({ counter: 0 });
        }
      }
    }, 1500);
  }

  render() {
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col lg={true}>
              <h1 class={{ display: "block" }}>
                Im Jesse and I like to{" "}
                <span className="changingHeader">
                  {this.state.words[this.state.counter]}
                </span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={true}>
              <p>
                I am a front-end developer who specializes in React. Let me help
                you grow your business, blog, or whatever else you had in mind
                with the power of the web.
              </p>
            </Col>
            <Col />
          </Row>
          <Row>
            <Col lg={true}>
              <Button className="btn-lg">Contact</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronHeader;
