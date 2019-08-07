import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import styled from "styled-components";

import LeftArrowIcon from "../components/Blog/LeftArrowIcon";

const BLOG_URL = `https://public-api.wordpress.com/rest/v1.1/sites/jesseperdueblog.home.blog/posts`;

class Blog extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    document.body.className = "blog";
    fetch(BLOG_URL)
      .then(res => res.json())
      .then(json => {
        const posts = json.posts.map(post => {
          return {
            title: post.title,
            date: post.date,
            author: post.author.name,
            image: post.featured_image,
            slug: post.slug,
            ID: post.ID
          };
        });
        this.setState({
          posts: posts
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const blogCard = this.state.posts.map(post => {
      return (
        <BlogCard
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
          slug={post.slug}
          ID={post.ID}
          key={post.ID}
          content={post.content}
        />
      );
    });

    return (
      <Wrapper>
        <LeftArrowIcon route="/" top="1rem" left="1rem" fill="white" />
        <StyledHeading>Blog</StyledHeading>
        <StyledSubheading>A Personal Blog by Jesse Perdue</StyledSubheading>
        {blogCard}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledHeading = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: #3ac489;
  text-shadow: 2px 2px #007bff;
`;

const StyledSubheading = styled.h5`
  color: white;
`;

export default Blog;
