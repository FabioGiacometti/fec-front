import React from "react";
import styled from "styled-components";
import SearchCard from "./SearchCard";

const CardList = (props) => {
  const arr = props.cards;

  const cardList = arr.map((card, index) => {
    return (
      <SearchCard
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
      {arr.length ? (
        <CardContainerTitle>
          {arr.length}
          <br></br>
          <span>
            links <br></br>encontrados
          </span>
        </CardContainerTitle>
      ) : (
        <CardContainerTitle>
          Estos son los ultimos links agregados.
        </CardContainerTitle>
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
  padding-bottom: 100px;
`;

const CardContainerTitle = styled.h2`
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
`;

export default CardList;
