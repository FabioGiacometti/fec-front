
import React from "react";
import styled from "styled-components";
import SearchCard from "./SearchCard";

const CardList = () => {
  const arr = [
    { titulo: "titulo", imagen: "http://www.houstonpettalk.com/wp-content/uploads/2009/01/grass-300x200.jpg", descripcion: "", url: "http://www.google.com" },
    { titulo: "titulo", imagen: "http://www.houstonpettalk.com/wp-content/uploads/2009/01/grass-300x200.jpg", descripcion: "", url: "http://www.google.com" },
    { titulo: "titulo", imagen: "http://www.houstonpettalk.com/wp-content/uploads/2009/01/grass-300x200.jpg", descripcion: "", url: "http://www.google.com" },
  ];

  const cardList = arr.map((card, index) => {
      console.log(card, " / ", index)
    return <SearchCard
      titulo={card.titulo}
      descripcion={card.descripcion}
      imagen={card.imagen}
      url={card.url}
      key={card.index} 
    />
  });

  return (<>{cardList}</>);
};

export default CardList;