import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import styled from "styled-components";
import LinksHeader from "./LinksHeader";
import Footer from "./Footer";
import {CardProvider, useCard } from './context/cardsContext'

export default ()=><CardProvider>
  <AppLinkSearch></AppLinkSearch>
</CardProvider>

const AppLinkSearch = () => {
  const [searchResults, setSearchResults] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  

  const  {links, isLoading} = useCard();
  console.log("mis cards", links)
  console.log("isloading", isLoading)

  



   const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }; 

   const buscar = (searchTerm) => {
    setIsloading(true)
      fetch(`https://links-bot-cloud-functions.vercel.app/api/get-links?tags=${searchTerm}`)
      .then((results) => results.json())
      .then((data) => {
        const { body } = data
        setSearchResults(data);
        setLinks(data.body);
        setIsloading(false)
    });
  }; 
  
  return (
    <LinkWrapper>
    <LinksHeader setSearchTerm={setSearchTerm} searchTerm={searchTerm} buscar={buscar}/>
    {!isLoading ? <div className="loader">Loading...</div> : <CardList/>}
    <Footer/>
  </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
overflow-x: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 100vh;
background: linear-gradient(180deg, #227655 0%, #C7FAE6 100%);
width: 100%;
`;





/*
    <LinkWrapper>
      <LinksHeader setSearchTerm={setSearchTerm} searchTerm={searchTerm} buscar={buscar}/>
      {!isLoading ? <CardList cards={links} /> : <div className="loader">Loading...</div>}
      <Footer/>
    </LinkWrapper>

*/