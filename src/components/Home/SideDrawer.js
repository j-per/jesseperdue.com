import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideDrawer = props => {
  return (
    <SideDrawerWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </SideDrawerWrapper>
  );
};

const SideDrawerWrapper = styled.nav`
  height: 100%;
  background-color: white;
  z-index: 10;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 60vw;
  }
`;

export default SideDrawer;
