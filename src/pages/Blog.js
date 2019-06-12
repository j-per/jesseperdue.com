import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import styled from "styled-components";

import LeftArrowIcon from "../components/Blog/LeftArrowIcon";

const BLOG_URL = `https://public-api.wordpress.com/rest/v1.1/sites/jesseperdueblog.home.blog/posts`;

class Blog extends React.Component {
  state = {
    posts: []
  };

  componentWillMount() {
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
      <div>
        <Wrapper>
          <LeftArrowIcon route="/" top="2rem" left="2rem" fill="white" />
          <StyledHeading>Blog</StyledHeading>
          {blogCard}
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #282c35;
`;

const StyledHeading = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: #3ac489;
  text-shadow: 2px 2px #007bff;
`;

export default Blog;
