import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import styled from "styled-components";
import LinksHeader from "./LinksHeader";
import Axios from "axios";

const LinkSearcher = () => {
  const API = `https://links-bot-cloud-functions.vercel.app/api/get-links?tags=frontend`;
  const [searchResults, setSearchResults] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [links, setLinks] = useState([]);
  const [isLoading, setIsloading] = useState(false)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch(API)
    .then((results) => results.json())
    .then((data) => {
      const { body } = data;
      /* console.log("body: ", body); */
      setSearchResults(data);
      setLinks(data.body);
    });
  }, []);
  
  const buscar = (searchTerm) => {
    // setIsloading(true)
      console.log("me ejecute con este searchterm",searchTerm)
      fetch(`https://links-bot-cloud-functions.vercel.app/api/get-links?tags=${searchTerm}`)
      .then((results) => results.json())
      .then((data) => {
        const { body } = data;
        console.log("body: ", body);
        setSearchResults(data);
        setLinks(data.body);
        console.log("esto es data",links)
        // setIsloading(false)
    });
  };
  
  return (
    <LinkWrapper>
      {console.log("esto es searchTerm", searchTerm)}
      <LinksHeader setSearchTerm={setSearchTerm} searchTerm={searchTerm} buscar={buscar}/>
      {!isLoading ? <CardList cards={links} /> : <div className="loader">Loading...</div>}
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
min-height: 150vh;
background: linear-gradient(180deg, #227655 0%, #C7FAE6 100%);
width: 100%;
`;
export default LinkSearcher;
