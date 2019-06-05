import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Elements/Button";

import Navigation from "../components/Navigation";

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
      <div>
        <Navigation />
        <Link to="/blog">
          <Button text="Back" />
        </Link>
        <h1>{this.state.post ? this.state.post.title : "Loading..."}</h1>
        <div
          dangerouslySetInnerHTML={this.createMarkup(
            this.state.post ? this.state.post.content : "Loading"
          )}
        />
      </div>
    );
  }
}

export default BlogDetails;
