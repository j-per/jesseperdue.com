import React from "react";
import styled from "styled-components";

const Backdrop = props => <BackdropWrapper onClick={props.click} />;

const BackdropWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;

export default Backdrop;
