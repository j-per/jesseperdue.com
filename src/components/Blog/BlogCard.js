import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../Elements/Button";
import PlaceHolderImage from "../../pictures/placeholder.png";

const CardWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  position: relative;
  padding: 1rem;
  max-width: 500px;
  background-color: white;
  border-radius: 5px;
  transition: 250ms;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    max-width: 300px;
  }
  &:hover {
    color: #111;
    box-shadow: 0 0 20px #111;
    background-image: linear-gradient(-90deg, #3ac489, #007bff);
  }
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 5px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const StyledP = styled.p`
  font-style: italic;
`;

const BlogCard = ({ image, title, date, author, ID, content, slug }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Link to={`/blog/${ID}/${slug}`}>
          <StyledImage src={image ? image : PlaceHolderImage} />
        </Link>
        <StyledP>{author}</StyledP>
        <Link to={`/blog/${ID}/${slug}`}>
          <Button text="Read" style={{ textAlign: "left" }} />
        </Link>
      </ImageWrapper>
      <TextWrapper>
        <h2>{title}</h2>
        <p>{date}</p>
      </TextWrapper>
    </CardWrapper>
  );
};

export default BlogCard;
