import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import styled from "styled-components";

import LeftArrowIcon from "../components/Blog/LeftArrowIcon";

const BLOG_URL = `https://public-api.wordpress.com/rest/v1.1/sites/jesseperdueblog.home.blog/posts`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c35;
  position: relative;
`;

const BlogCardWrapper = styled.div`
  border-radius: 5px;
`;

const StyleH1 = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: #3ac489;
  text-shadow: 2px 2px #007bff;
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

  returnBlogCard() {
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
        <Wrapper>
          <LeftArrowIcon route="/" />
          <StyleH1>Blog</StyleH1>
          <BlogCardWrapper>{this.returnBlogCard()}</BlogCardWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default Blog;
