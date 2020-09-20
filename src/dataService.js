import React, { useEffect, useState } from "react";

const API = `https://links-bot-cloud-functions.vercel.app/api/get-links?tags=frontend`;
  const [searchResults, setSearchResults] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  //const [links, setLinks] = useState([]);
  const [isLoading, setIsloading] = useState(false)

  export const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };



  const InitializeApp = ()=>{

    return fetch(API)
    .then((results) => results.json())
    .then((data) => {
      const { body } = data;
      //setSearchResults(data);
      return data.body;

    });


  }
  
  export const search = (searchTerm) => {
      setIsloading(true)
      fetch(`https://links-bot-cloud-functions.vercel.app/api/get-links?tags=${searchTerm}`)
      .then((results) => results.json())
      .then((data) => {
        const { body } = data;
        setSearchResults(data);
        setLinks(data.body);
        setIsloading(false)
        
    });
  };

  module.exports = {
    InitializeApp
  }