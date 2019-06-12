import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PlaceHolderImage from "../../pictures/placeholder.png";

const CardWrapper = styled(Link)`
  margin: 1rem 1rem;
  display: flex;
  position: relative;
  padding: 0.5rem;
  width: 500px;
  background-color: white;
  border-radius: 5px;
  transition: 200ms;
  color: #282c35;
  @media (max-width: 700px) {
    flex-direction: column;
    width: 90vw;
  }
  &:hover {
    color: white;
    background: #3ac489;
    text-decoration: none;
  }
`;

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 700px) {
    width: 100%;
  }
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
  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

const StyledP = styled.p`
  font-style: italic;
`;

const BlogCard = ({ image, title, date, author, ID, content, slug }) => {
  const shortenTitle = title => {
    if (title.length > 60) {
      const splitTitle = title.split("");
      splitTitle.length = 60;
      const returnedTitle = `${splitTitle.join("")}...`;
      return returnedTitle;
    } else {
      return title;
    }
  };

  return (
    <CardWrapper to={`/blog/${ID}/${slug}`}>
      <ImageWrapper>
        <StyledImage
          height="200px"
          width="200px"
          src={image ? image : PlaceHolderImage}
        />
      </ImageWrapper>
      <TextWrapper>
        <h3>{shortenTitle(title)}</h3>
        <p>{date}</p>
        <StyledP>{author}</StyledP>
      </TextWrapper>
    </CardWrapper>
  );
};

export default BlogCard;
