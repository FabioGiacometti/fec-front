import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import styled from "styled-components";
import LinksHeader from "./LinksHeader";
import Axios from "axios";

const API =
  "https://links-bot-cloud-functions.vercel.app/api/get-links?tags=react";

const LinkSearcher = () => {
  const [searchResults, setSearchResults] = useState({})
  const [links, setLinks] = useState()

  useEffect(() => {
    fetch(API)
      .then(results => results.json())
      .then(data => {
        const {body} = data;
        console.log("body: ", body)
        setSearchResults(data)
        setLinks(data.body)
      });
  }, []);

  return (
    <LinkWrapper>
      <LinksHeader />
      { links ? (<CardList cards={links}/>) : "Loading..."}
    </LinkWrapper>
  );
};


const LinkWrapper = styled.div`
  background-color: var(--main);
  width: 100%;
`;
export default LinkSearcher;
