import React from "react";
// import CardList from "./CardList";
import styled from "styled-components";
import FECIsoLogo from "../public/images/iso-logo.png";
import Waves from "../public/images/Vector.png";
import SearchBar from "./Searchbar";

const LinksHeader = (props) => {
  return (
    <HeaderWrapper>
      <img className="isoLogo" src={FECIsoLogo} />
      <h2 className="title">Buscador de links</h2>
      <SearchBar props={props} />
      <img className="wavesHr" src={Waves} />
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
  margin-bottom: 80px;



  @media(max-width: 590px){
    margin-bottom: 40px;
  }
  
  .isoLogo{
    position: absolute;
    top: 10px;
    left: 34px;
    margin-bottom: 40px;
    height:50px;
  
    @media(max-width: 590px){
      height:40px;
      margin-bottom: 20px;
      left:18px;
    }
  }
    .title{
      color: var(--main-dark);
      margin-top: 80px;
      
      @media (max-width: 588px){
        align-self: flex-start;
        margin: 70px 20px 18px;
        text-align: left;
      }
    }
      .wavesHr{
        position: absolute;
        height: auto;
        width:100%;
        top: 193px;
        filter: drop-shadow(1px 1px 1px #00000005);
      
        @media (max-width: 590px){
          width:120%;
          top:181px;
      
        }

        @media (max-width: 480px){
          display:none;
          
      
        }
`;



export default LinksHeader;
