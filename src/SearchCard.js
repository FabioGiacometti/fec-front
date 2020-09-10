import React from "react";
import styled from "styled-components";

const SearchCard = (props) => {
  const {titulo, imagen, descripcion, url} = props;

  return (
    <>
        <article>
            <img href={imagen} />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <a href={url}>{url}</a>
        </article> 
    </>
  );
};

export default SearchCard;