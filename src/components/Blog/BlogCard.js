import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../Elements/Button";
import PlaceHolderImage from "../../pictures/placeholder.png";

const CardWrapper = styled.section`
  border-bottom: 5px solid #33bf82;
  margin: 3rem 0;
  display: flex;
  position: relative;
  padding: 2rem 2rem;
  justify-content: flex-start;
`;

const TextWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: right;
`;

const BlogCard = ({ image, title, date, author, ID, content, slug }) => {
  return (
    <CardWrapper>
      <Link to="/">
        <img src={image ? image : PlaceHolderImage} />
      </Link>
      <TextWrapper>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{author}</p>
        <Link to={`/blog/${ID}/${slug}`}>
          <Button text="Read" id={ID} content={content} />
        </Link>
      </TextWrapper>
    </CardWrapper>
  );
};

export default BlogCard;
