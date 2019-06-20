import React from "react";
import "./JumbotronHeader.css";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import NewNav from "./NewNav";
import BurgerMenu from "./BurgerMenu";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

class JumbotronHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      words: ["Create", "Code", "Design", "Develop", "Teach"],
      burgerMenuIsOpen: false
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

  burgerMenuHandler = () => {
    this.setState({
      burgerMenuIsOpen: !this.state.burgerMenuIsOpen
    });
  };

  backdropClickHandler = () => {
    this.setState({
      burgerMenuIsOpen: false
    });
  };

  render() {
    let backdrop;
    if (this.state.burgerMenuIsOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <section id="jumbotronheader">
        <Jumbotron>
          <NewNav />
          <BurgerMenu burgerMenuHandler={this.burgerMenuHandler} />
          <SideDrawer show={this.state.burgerMenuIsOpen} />
          {backdrop}
          <Container>
            <Row>
              <Col lg={true}>
                <h1 className={{ display: "block" }}>
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
                  I am a front-end developer who specializes in React. Let me
                  help you grow your business, blog, or whatever else you had in
                  mind with the power of the web.
                </p>
              </Col>
              <Col />
            </Row>
          </Container>
        </Jumbotron>
      </section>
    );
  }
}

export default JumbotronHeader;
