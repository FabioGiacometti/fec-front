import React from "react";
import styled from "styled-components";

const SearchCard = (props) => {
  const { title, image, description, link } = props;


  return (
    <Card>
      {console.log("tags: ", props)}
      <Imagen src={image} />
      <CardBody>
      <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <a href={link}>{link}</a>

      </CardBody>
    </Card>
  );
};

const Card = styled.a `
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
  
  &:hover {
    box-shadow: 0px 5px 5px 2px #00000010;
  }`
;

const CardTitle = styled.h2`
    color:var(--main-dark);
    margin:0px;
`;

const Imagen = styled.img`
  height: 100%;
  align-self: center;
  transition: transform 1s;
  width: 250px;
  object-fit: cover;
  border-radius: 6px 0 0 6px;
  &:hover {
    cursor: pointer;
  }`
;

const CardBody= styled.div`
width: 70%;
display: flex;
flex-direction: column;
margin-left: 40px`;


export default SearchCard;
