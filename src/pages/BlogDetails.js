import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import LeftArrowIcon from "../components/Blog/LeftArrowIcon";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: 0 auto;
  color: white;
  padding: 2rem;
  @media (max-width: 1000px) {
    width: 80vw;
  }
  img {
    max-width: 100%;
  }
  div {
    p {
      line-height: 2rem;
      font-size: 20px;
    }

    ul {
      li {
        img {
          height: 200px;
          width: 200px;
          object-fit: cover;
        }
      }
    }
  }
`;

class BlogDetails extends React.Component {
  state = {
    post: null
  };

  componentDidMount() {
    const postID = this.props.match.params.id;
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/jesseperdueblog.home.blog/posts/${postID}`
    )
      .then(res => res.json())
      .then(res => this.setState({ post: res }))
      .catch(err => console.log(err));
  }

  createMarkup(markup) {
    return { __html: markup };
  }

  render() {
    return (
      <div style={{ background: "#282c35" }}>
        <ContentWrapper>
          <LeftArrowIcon route="/blog" top="2rem" left="2rem" fill="white" />
          <h1>{this.state.post ? this.state.post.title : "Loading..."}</h1>
          <div
            dangerouslySetInnerHTML={this.createMarkup(
              this.state.post ? this.state.post.content : "Loading"
            )}
          />
        </ContentWrapper>
      </div>
    );
  }
}

export default BlogDetails;
