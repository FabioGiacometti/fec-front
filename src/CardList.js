import React from "react";
import styled from "styled-components";
import SearchCard from "./SearchCard";

const CardList = (props) => {

  console.log("props: ", props.cards)
  const arr = props.cards;
  
  const cardList = arr.map((card, index) => {
    console.log("card: ", card)
    return (
      <SearchCard
        title={card.title}
        description={card.description}
        image={'https://imagenesgratis.com.ar/wp-content/uploads/2020/01/cat-feline-gato-siames-scaled.jpg'}
        link={card.link}
        tags={card.tags}
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
  width:80%;
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