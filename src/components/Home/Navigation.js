import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewNav = () => (
  <NavWrapper>
    <ul>
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
  position: absolute;
  right: 3rem;
  top: 2.5rem;
  ul {
    display: flex;
    li {
      list-style: none;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SyledLink = styled(Link)`
  color: white;
  padding: 0 10px;
  transition: 400ms;
  border-top: 2px solid transparent;
  &:hover {
    text-decoration: none;
    border-top: 2px solid #3ac489;
    color: white;
  }
`;

export default NewNav;
