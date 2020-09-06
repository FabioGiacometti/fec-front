import FECLogo from "../public/images/fec-logo.png";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const App = () => {
  return (
    <StyledApp>
      <Welcome>
        <Logo src={FECLogo} alt="fec-logo" />
        <Title>BIENVENIDO AL FRONTENDCAFÉ</Title>
      </Welcome>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #63c29d;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 400px;
  align-self: center;
  transition: transform 1s;

  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
`;

const Title = styled.h1`
  font-size: 5em;
  color: white;
`;

ReactDOM.render(<App />, document.getElementById("root"));
