import React from "react";
import CardList from "./CardList";
import styled from "styled-components";
import FECIsoLogo from "../public/images/iso-logo.png";
import Waves from "../public/images/background-waves.svg";
import SearchBar from "./Searcbar";

const LinksHeader = (props) => {
  return (
    <HeaderWrapper>
      <IsoLogo src={FECIsoLogo} />
      <Title>Buscador de links</Title>
      <SearchBar props={props} />
      <WavesHr />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: relative;
  flex-direction: column;
  background-color: #DAFFF1;
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

const WavesHr = styled.div`
  position: absolute;
  width: 100%;
  background-image: url(/background-waves.e68eb3a8.svg);
  height: 90px;
  bottom: -80px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(1px 1px 1px #00000005)
`;

export default LinksHeader;
