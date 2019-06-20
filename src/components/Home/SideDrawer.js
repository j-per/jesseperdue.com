import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

const SideDrawer = ({ show }) => {
  const test = () => {
    if (show) {
      return "closed open";
    } else {
      return "closed";
    }
  };

  return (
    <SideDrawerWrapper show={show} className={test()}>
      <ul>
        <li>
          <SideDrawerLink to="/">Home</SideDrawerLink>
        </li>
        <li>
          <SideDrawerLink to="/blog">Blog</SideDrawerLink>
        </li>
      </ul>
    </SideDrawerWrapper>
  );
};

const SideDrawerWrapper = styled.nav`
  height: 100%;
  z-index: 10;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  background: white;
  top: 0;
  right: 0;
  width: 400px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 70px;
    list-style: none;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 60vw;
  }
`;

const SideDrawerLink = styled(Link)`
  color: #27b47b;
  &:hover {
    text-decoration: none;
  }
`;

export default SideDrawer;
