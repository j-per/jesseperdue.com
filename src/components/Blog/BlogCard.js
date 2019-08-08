import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PlaceHolderImage from "../../pictures/placeholder.png";

const BlogCard = ({ image, title, date, author, ID, content, slug }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const dt = newDate.getDate();
  const renderedDate = `${months[month - 1]} ${dt}, ${year}`;

  const shortenTitle = title => {
    if (title.length > 70) {
      const splitTitle = title.split("");
      splitTitle.length = 70;
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
          height="150px"
          width="150px"
          src={image ? image : PlaceHolderImage}
        />
      </ImageWrapper>
      <TextWrapper>
        <h3>{shortenTitle(title)}</h3>
        <p>{renderedDate}</p>
      </TextWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled(Link)`
  margin: 1rem 1rem;
  display: flex;
  position: relative;
  padding: 0.5rem;
  width: 550px;
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
    background: linear-gradient(
      48deg,
      rgba(58, 196, 137, 1) 0%,
      rgba(58, 196, 137, 1) 39%,
      rgba(0, 123, 255, 1) 100%
    ); /* w3c */
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
  position: relative;
  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export default BlogCard;
