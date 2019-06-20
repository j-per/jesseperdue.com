import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewNav = () => (
  <NavWrapper>
    <ul>
      <li>
        <SyledLink to="/">Home</SyledLink>
      </li>
      <li>
        <SyledLink to="/blog">Blog</SyledLink>
      </li>
    </ul>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  display: flex;
  font-size: 20px;
  justify-content: flex-end;
  margin-right: 2rem;
  background-color: transparent;
  position: absolute;
  right: 1rem;
  top: 1rem;
  box-sizing: border-box;
  ul {
    display: flex;
    li {
      list-style: none;
    }
  }
`;

const SyledLink = styled(Link)`
  color: white;
  margin: 0 0.5rem;
  padding: 0 25px;
  transition: 400ms;
  border: 1.5px solid transparent;
  border-radius: 5px;
  &:hover {
    text-decoration: none;
    background: #3ac489;
    border: 1.5px solid #3ac489;
    color: white;
  }
`;

export default NewNav;
