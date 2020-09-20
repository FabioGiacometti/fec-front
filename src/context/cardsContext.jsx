import React, { useEffect, useState, useMemo } from "react";


const CardContext = React.createContext();

export function cardProvider (props){
    const [searchResults, setSearchResults] = useState({});
    const [links, setLinks] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    const API = `https://links-bot-cloud-functions.vercel.app/api/get-links?tags=frontend`;

    useEffect(() => {
        setIsloading(true)
        fetch(API)
        .then((results) => results.json())
        .then((data) => {
          const { body } = data;
          setSearchResults(data);
          setLinks(data.body);
          setIsloading(false)
        });
      }, []);
      
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


    const value = useMemo(()=>{
        return({
            links,
            isLoading
        })
    },[links])

    return <CardContext.Provider value={value} {...props}/>
}

export function useCard(){
    if(!context){
        throw new Error('useCards should be defined on provider CardContext')
    }
    return context;
} 
