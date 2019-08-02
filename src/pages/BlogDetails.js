import React from "react";
import styled from "styled-components";

import LeftArrowIcon from "../components/Blog/LeftArrowIcon";

class BlogDetails extends React.Component {
  state = {
    post: null
  };

  componentDidMount() {
    document.body.className = "blogdetails";
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
      <div>
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 0 auto;
  color: white;
  padding: 2rem;
  @media (max-width: 700px) {
    width: 90vw;
  }
  img {
    max-width: 100%;
  }
  pre {
    padding: 1rem;
    border-radius: 5px;
    background: #cc2b5e; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #753a88,
      #cc2b5e
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #753a88,
      #cc2b5e
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: white;
  }
  h1 {
    padding-bottom: 2rem;
    text-decoration: underline;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
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

export default BlogDetails;
