import React from "react";
import Navigation from "../components/Navigation";
import BlogCard from "../components/Blog/BlogCard";

import styled from "styled-components";

const BLOG_URL = `https://public-api.wordpress.com/rest/v1.1/sites/jesseperdueblog.home.blog/posts`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 30vw;
`;

const StyleH1 = styled.h1`
  font-size: 100px;
  font-weight: bold;
`;

class Blog extends React.Component {
  state = {
    posts: null
  };

  componentWillMount() {
    fetch(BLOG_URL)
      .then(res => res.json())
      .then(json => {
        this.setState({ posts: json.posts });
      })
      .catch(err => console.log(err));
  }

  test() {
    if (this.state.posts) {
      const blogCardProps = this.state.posts.map(post => {
        return (
          <BlogCard
            title={post.title}
            date={post.date}
            author={post.author.name}
            image={post.featured_image}
            slug={post.slug}
            ID={post.ID}
            key={post.ID}
            content={post.content}
          />
        );
      });
      return blogCardProps;
    } else {
      return "Loading";
    }
  }

  render() {
    return (
      <div>
        <Navigation />

        <Wrapper>
          <StyleH1>Blog</StyleH1>
          {this.test()}
        </Wrapper>
      </div>
    );
  }
}

export default Blog;
