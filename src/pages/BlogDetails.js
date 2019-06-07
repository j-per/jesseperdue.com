import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Elements/Button";
import LeftArrowIcon from "../components/Blog/LeftArrowIcon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 20rem;
  position: relative;
  div {
    p {
      line-height: 2rem;
      font-size: 20px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;

      li {
        padding: 1rem;
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
      <Wrapper>
        <LeftArrowIcon fill="#111" route="/blog" />
        <h1>{this.state.post ? this.state.post.title : "Loading..."}</h1>
        <div
          dangerouslySetInnerHTML={this.createMarkup(
            this.state.post ? this.state.post.content : "Loading"
          )}
        />
      </Wrapper>
    );
  }
}

export default BlogDetails;
