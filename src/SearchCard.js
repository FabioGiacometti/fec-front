import React from "react";
import styled from "styled-components";

const SearchCard = (props) => {
  const { title, image, description, link } = props;

  return (
    <Card>
      {console.log("tags: ", props)}
      <img src={image} className="cardImage" />
      <div className="cardBody">
        <h2 >{title}</h2>
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    </Card>
  );
};

const Card = styled.a`
width:80%;
max-width: 800px
max-height: 180px;
margin-top: 20px;
display: flex;
align-items: center;
background-color: white;
postition: relative;
border-radius: 6px;
box-shadow: 0px 1px 2px 1px #00000020;
transition: all 100ms;

@media(max-width: 590px){
    width: calc(100% - 40px);
    flex-direction: column;
}

  &:hover {
    box-shadow: 0px 5px 5px 2px #00000010;
  }
  
  h2{
    color:var(--main-dark);
    margin:0px;
}
.cardImage{
  // flex:2
  align-self: center;
  transition: transform 1s;
  width:30%;
  max-width: 250px;
  height:100%;
  object-fit: cover;
  border-radius: 6px 0 0 6px;
  
  &:hover {
    cursor: pointer;
  }

  @media(max-width: 590px){
    width: 100%;
    max-width: none;
  }

}
    .cardBody{
      // flex:1;
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-left: 40px;
  
      @media(max-width: 590px){
        padding: 20px;
      margin-left: 40px;

      }

  }
  `;

export default SearchCard;
