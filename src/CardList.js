import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import {useCard } from './context/cardsContext'
const CardList = (props) => {
  const {links} = useCard();

  const cardList = links.map((card, index) => {
    return (
      <Cards
        title={card.title}
        description={card.description}
        image={
          "https://imagenesgratis.com.ar/wp-content/uploads/2020/01/cat-feline-gato-siames-scaled.jpg"
        }
        link={card.link}
        tags={card.tags}
        key={card.index}
      />
    );
  });

  return (
    <CardContainer>
      {links.length ? (
        <h2 className="cardContainerTitle">
          {links.length}
          <br></br>
          <span>
            links <br></br>encontrados
          </span>
        </h2>
      ) : (
        <h2 className="cardContainerTitle">
          Estos son los ultimos links agregados.
        </h2>
      )}
      {cardList}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin: 0 auto;
  // margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  postition: relative;
  padding-bottom: 180px;
  padding-top: 100px;
  
  .cardContainerTitle{
    margin: -20px 20px 10px;
    line-height: 70px;
    display: flex;
    align-items: center;
    color: white;
    text-align: left;
    font-size: 5em;
  
    span {
      font-size: 0.5em;
      line-height: 72%;
      margin-left: 3px;
    }

    @media(max-width: 590px){
      align-self: flex-start
    }
  }
`;

export default CardList;
