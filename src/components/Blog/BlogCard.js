import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PlaceHolderImage from "../../pictures/placeholder.png";

const CardWrapper = styled.section`
  border-top: 5px solid #33bf82;
  border-bottom: 5px solid #33bf82;
  margin: 3rem 0;
  display: flex;
  position: relative;
  padding: 2rem 0;
  justify-content: flex-start;
`;

const TextWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: right;
`;

const BlogCard = ({ image, title, date, author }) => (
  <CardWrapper>
    <Link to="/">
      <img src={image ? image : PlaceHolderImage} />
    </Link>
    <TextWrapper>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{author}</p>
    </TextWrapper>
  </CardWrapper>
);

export default BlogCard;
