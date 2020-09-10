import React from "react";
import CardList from "./CardList";
import styled from "styled-components";

const LinksHeader = ()=>{
    return (
        <HeaderWrapper>
            <SearchBar></SearchBar>
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`

    width:80%
    display:flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column; 
    background-color:white;
    height:250px;

`;

const SearchBar= styled.input`
border:2px solid black;
margin:0 auto;

`;


export default LinksHeader;