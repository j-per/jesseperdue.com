import React from "react";
import styled from "styled-components";

const BurgerMenu = props => (
  <BurgerMenuWrapper onClick={props.burgerMenuHandler}>
    <Line />
    <Line />
    <Line />
  </BurgerMenuWrapper>
);

const BurgerMenuWrapper = styled.button`
  height: 25px;
  width: 25px;
  display: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  background-repeat: no-repeat;
  border: none;
  align-content: center;
  padding: 0;
  &:focus {
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 1px;
  background-color: white;
  z-index: 2;
`;

export default BurgerMenu;
