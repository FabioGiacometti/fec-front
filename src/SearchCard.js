import React from "react";
import styled from "styled-components";

const SearchCard = (props) => {
  const { title, image, description, link, tags } = props;

  return (
    <Card href={link} target="blank">
      <img className="cardImage" src={image}/>
      <div className="cardBody">
        <a href={link}>{link}</a>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tagContainer">
        {/* <span>Tags: {tags.map((tag, index) => {tag.index < tags.length ? `${tag}, `: `${tag}`})} </span> */}
          <span className="tags tagsTitle">Tags:</span> <span className="tags tag">{tags.map((tag) => `${tag} `)}</span>
        </div> 
        <p className="visitar">Visitar</p>
      </div>
    </Card>
  );
};

const Card = styled.a`
text-decoration:none;
color: #1e1e1e;
position:relative;
width:80%;
min-width: 700px;
max-width: 800px
max-height: 180px;
margin-top: 20px;
display: flex;
background-color: white;
postition: relative;
border-radius: 6px;
box-shadow: 0px 0px 0px 0px #00000020;
transition: all 200ms ease-in-out;
overflow: hidden;

@media(max-width: 590px){
  width: calc(100% - 40px);
  flex-direction: column;
}

&:hover {
  box-shadow: 0px 5px 5px 2px #00000010;
}

h2{
  font-size: 1.5em;
  color:var(--main-dark);
  margin:0px;
  font-weight: 100;
}

.cardImage{
  align-self: center;
  transition: transform 1s;
  width:30%;
  max-width: 250px;
  height:180px;
  object-fit: cover;
 
  &:hover {
    cursor: pointer;
  }
  
  @media(max-width: 590px){
    width: 100%;
    max-width: none;
    height:210px;

  }
  
}
.cardBody{
  // flex:1;
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 40px;
  align-items: start;
  justify-content: space-between;
  
  a{
  color: var(--main-dark);
  text-decoration: none; 
  font-weight:900;
  }

  .tags{
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    
  }

  .tagsTitle{
    color: var(--main-dark)
  }

  .tag{
    font-weight:400;
  }

  p{
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    }

    @media(max-width: 590px){
      padding: 20px;
      margin: 0;
    }
  }

  .visitar{
    position:absolute;
    bottom: 15px;
    right: 30px;
    margin: 0;
  }
  `;

export default SearchCard;
