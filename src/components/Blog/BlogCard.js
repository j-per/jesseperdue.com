import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PlaceHolderImage from "../../pictures/placeholder.png";
import RightArrowIcon from "./RightArrowIcon";

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
    color: white;
    background: #3ac489;
  }
`;

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
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
  position: relative;
`;

const StyledP = styled.p`
  font-style: italic;
`;

const BlogCard = ({ image, title, date, author, ID, content, slug }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Link to={`/blog/${ID}/${slug}`}>
          <StyledImage
            height="200px"
            width="200px"
            src={image ? image : PlaceHolderImage}
          />
        </Link>
      </ImageWrapper>
      <TextWrapper>
        <h2>{title}</h2>
        <p>{date}</p>
        <StyledP>{author}</StyledP>
        <RightArrowIcon linkto={`/blog/${ID}/${slug}`} />
      </TextWrapper>
    </CardWrapper>
  );
};

export default BlogCard;
