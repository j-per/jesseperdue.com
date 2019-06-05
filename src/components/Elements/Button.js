import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  display: inline-block;
  width: 5rem;
  border: none;
  padding: 8px;
  background-color: #007bff;
  color: white;
  align-self: flex-end;
  transition: 300ms;
  border-radius: 5px;
  :hover {
    background-color: #000060;
    cursor: pointer;
  }
`;

const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

export default Button;
