import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PlaceHolderImage from "../../pictures/placeholder.png";
import RightArrowIcon from "./RightArrowIcon";

const CardWrapper = styled.div`
  margin: 1rem 1rem;
  display: flex;
  position: relative;
  padding: 0.5rem;
  max-width: 500px;
  background-color: white;
  border-radius: 5px;
  transition: 200ms;
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
  const shortenTitle = title => {
    if (title.length > 35) {
      const splitTitle = title.split("");
      splitTitle.length = 35;
      const returnedTitle = `${splitTitle.join("")}...`;
      return returnedTitle;
    } else {
      return title;
    }
  };

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
        <h2>{shortenTitle(title)}</h2>
        <p>{date}</p>
        <StyledP>{author}</StyledP>
        <RightArrowIcon linkto={`/blog/${ID}/${slug}`} />
      </TextWrapper>
    </CardWrapper>
  );
};

export default BlogCard;
