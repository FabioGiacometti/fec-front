import React from "react";
import styled from "styled-components";
import SearchCard from "./SearchCard";

const CardList = () => {
  const arr = [
    {
      titulo: "titulo",
      imagen:
        "http://www.houstonpettalk.com/wp-content/uploads/2009/01/grass-300x200.jpg",
      descripcion:
        "Esta es una descripcion generica que podria ser un poco mas copada pero no me sale mejor",
      url: "http://www.google.com/",
    },
    {
      titulo: "titulo",
      imagen:
        "http://www.houstonpettalk.com/wp-content/uploads/2009/01/grass-300x200.jpg",
      descripcion:
        "Esta es una descripcion generica que podria ser un poco mas copada pero no me sale mejor",
      url: "http://www.google.com/",
    },
    {
      titulo: "titulo",
      imagen:
        "http://www.houstonpettalk.com/wp-content/uploads/2009/01/grass-300x200.jpg",
      descripcion:
        "Esta es una descripcion generica que podria ser un poco mas copada pero no me sale mejor",
      url: "http://www.google.com/",
    },
  ];

  const cardList = arr.map((card, index) => {
    console.log(card, " / ", index);
    return (
      <SearchCard
        titulo={card.titulo}
        descripcion={card.descripcion}
        imagen={card.imagen}
        url={card.url}
        key={card.index}
      />
    );
  });

  return (
    <CardContainer>
      <CardContainerTitle>
        56
        <br></br>
        <span>Links were found</span>
        <span>we´ll hope you find what you are looking for</span>
      </CardContainerTitle>
      {cardList}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  postition: relative;
`;

const CardContainerTitle = styled.h2`
color: white;
text-align: center;
font-size: 2em`;


export default CardList;