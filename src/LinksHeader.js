import React from "react";
import CardList from "./CardList";
import styled from "styled-components";
import FECIsoLogo from "../public/images/iso-logo.png";
import Waves from "../public/images/Vector.png";
import SearchBar from "./Searcbar";

const LinksHeader = (props) => {
  return (
    <HeaderWrapper>
      <IsoLogo src={FECIsoLogo} />
      <Title>Buscador de links</Title>
      <SearchBar props={props} />
      <WavesHr src={Waves}/>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: relative;
  flex-direction: column;
  background-color: #c8f1e1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 117px;
`;

const IsoLogo = styled.img`
  position: absolute;
  top: 10px;
  left: 34px;
  margin-bottom: 40px;
  height:50px;
`;

const Title = styled.h2`
  color: var(--main-dark);
  margin-top: 80px;
`;

//probar con pasar esto a un div+image

const WavesHr = styled.img`
  position: absolute;
  height: auto;
  top: 213px;
  filter: drop-shadow(1px 1px 1px #00000005);

  @media (max-width: 368px){
    display:none
  }
`;

export default LinksHeader;
