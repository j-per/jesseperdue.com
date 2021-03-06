import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline;
  position: absolute;
  transition: 200ms;
  top: ${props => props.top};
  left: ${props => props.left};
  @media (max-width: 700px) {
    top: 1rem;
    left: 1rem;
  }
  fill: ${props => props.fill};
  &:hover {
    fill: #33bf82;
    transform: scale(1.03);
  }
`;

const ArrowIconLeft = styled.svg`
  width: 50px;
  @media (max-width: 960px) {
    width: 20px;
  }
`;

const LeftArrowIcon = props => (
  <StyledLink
    to={props.route}
    top={props.top}
    left={props.left}
    fill={props.fill}
  >
    <ArrowIconLeft
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="arrow-circle-left"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z" />
    </ArrowIconLeft>
  </StyledLink>
);

export default LeftArrowIcon;
