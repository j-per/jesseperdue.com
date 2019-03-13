import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./Blog.css";

class Portfolio extends React.Component {
  render() {
    return (
      // <Container className="blog_wrappper my-5">
      //   <Row>
      //     <Col className="my-5">
      //       <h1>Blog</h1>
      //     </Col>
      //   </Row>
      //   <Row className="justify-content-center">
      //     <Col
      //       lg
      //       className="blog_box_1 m-3 d-flex flex-column justify-content-center"
      //     >
      //       <div className="add_padding">
      //         <a href="#">
      //           <h4>
      //             Building your first React app Building your first React app
      //           </h4>
      //         </a>
      //         <p className="blog_p">Published: March 20, 2019</p>
      //         <p className="blog_p">
      //           Author: <i>Jesse Perdue</i>
      //         </p>
      //         <Button className="custom_button">Read...</Button>
      //       </div>
      //     </Col>
      //     <Col
      //       lg
      //       className="blog_box_2 m-3 d-flex flex-column justify-content-center"
      //     >
      //       <div className="add_padding">
      //         <a href="#">
      //           <h4>Going to the grocery store with your wife</h4>
      //         </a>
      //         <p className="blog_p">Published: March 20, 2019</p>
      //         <p className="blog_p">
      //           Author: <i>Jesse Perdue</i>
      //         </p>
      //         <Button className="custom_button">Read...</Button>
      //       </div>
      //     </Col>
      //     <Col
      //       lg
      //       className="blog_box_3 m-3 d-flex flex-column justify-content-center"
      //     >
      //       <div className="add_padding">
      //         <a href="#">
      //           <h4>Creating a slanted background in CSS</h4>
      //         </a>
      //         <p className="blog_p">Published: March 20, 2019</p>
      //         <p className="blog_p">
      //           Author: <i>Jesse Perdue</i>
      //         </p>
      //         <Button className="custom_button">Read...</Button>
      //       </div>
      //     </Col>
      //   </Row>
      //   <Row className="justify-content-center">
      //     <Col
      //       lg
      //       className="blog_box_1 m-3 d-flex flex-column justify-content-center"
      //     >
      //       <div className="add_padding">
      //         <a href="#">
      //           <h4>My Journey from beginner to senior developer</h4>
      //         </a>
      //         <p className="blog_p">Published: March 20, 2019</p>
      //         <p className="blog_p">
      //           Author: <i>Jesse Perdue</i>
      //         </p>
      //         <Button className="custom_button">Read...</Button>
      //       </div>
      //     </Col>
      //     <Col
      //       lg
      //       className="blog_box_2 m-3 d-flex flex-column justify-content-center"
      //     >
      //       <div className="add_padding">
      //         <a href="#">
      //           <h4>Building your first React app</h4>
      //         </a>
      //         <p className="blog_p">Published: March 20, 2019</p>
      //         <p className="blog_p">
      //           Author: <i>Jesse Perdue</i>
      //         </p>
      //         <Button className="custom_button">Read...</Button>
      //       </div>
      //     </Col>
      //     <Col
      //       lg
      //       className="blog_box_3 m-3 d-flex flex-column justify-content-center"
      //     >
      //       <div className="add_padding">
      //         <a href="#">
      //           <h4>Building your first React app</h4>
      //         </a>
      //         <p className="blog_p">Published: March 20, 2019</p>
      //         <p className="blog_p">
      //           Author: <i>Jesse Perdue</i>
      //         </p>
      //         <Button className="custom_button">Read...</Button>
      //       </div>
      //     </Col>
      //   </Row>
      // </Container>
      <Container>
        <Row>
          <Col>
            <h1>Blog</h1>
          </Col>
        </Row>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=242%C3%97160&w=242&h=160"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=242%C3%97160&w=242&h=160"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=242%C3%97160&w=242&h=160"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        ;
      </Container>
    );
  }
}

export default Portfolio;
