import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = (props) => {
  /* const [searchTerm, setSearchTerm] = useState(""); */

  const handleChange = (event) => {
    props.props.setSearchTerm(event.target.value);
  };

  return (
    <SearchForm>
      <SearchInput
        value={props.props.searchTerm}
        onChange={handleChange}
        placeholder="Buscar en la base"
      />
      {props.props.searchTerm ? (
        <Eraser onClick={() => props.props.setSearchTerm("")}>×</Eraser>
      ) : null}
      <SearchButton onClick={()=> props.props.buscar(props.props.searchTerm)}>Buscar</SearchButton>
    </SearchForm>
  );
};

const SearchForm = styled.div`
  position: relative;
  height: 45px;
  width: 60%;
  margin-bottom: 40px;
  display: flex;
`;

const SearchInput = styled.input`
  border: 2px solid var(--main-dark);
  height: 45px;
  width: 100%;
  border-radius: 3px 0 0 3px;

  &::placeholder {
    font-weight: bold;
  }

  &:focus {
    outline: 1px solid var(--main-dark);
  }
`;

const Eraser = styled.span`
  position: absolute;
  right: 81px;
  top: 8px;
  color: var(--main-dark);
  font-size: 1.4em;
`;

const SearchButton = styled.button`
  border: 2px solid var(--main-dark);
  color: var(--main);
  background-color: white;
  font-weight: bold;
  transform: translateX(-2px);
  border-radius: 0 3px 3px 0;

  &:focus {
    outline: 1px solid var(--main-dark);
  }
`;

export default SearchBar;
