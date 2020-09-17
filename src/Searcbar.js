import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../public/images/buscar.png";

const SearchBar = (props) => {
  /* const [searchTerm, setSearchTerm] = useState(""); */
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
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
      <SearchButton onClick={() => props.props.buscar(props.props.searchTerm)}>
        {vw >= 768 ? "Buscar" : <Buscar src={SearchIcon}></Buscar>}
      </SearchButton>
    </SearchForm>
  );
};

const SearchForm = styled.div`
  position: relative;
  // height: 45px;
  width: 60%;
  margin-bottom: 40px;
  display: flex;

  @media (max-width: 768px) {
    // flex-direction: column;
    width: calc(100% - 20px);
  }
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
  top: 2px;
  color: var(--main-dark);
  font-size: 2em;

  @media (max-width: 768px) {
    right: 15px;
  }
`;

const SearchButton = styled.button`
  border: 2px solid var(--main-dark);
  color: var(--main-dark);
  background-color: white;
  font-weight: bold;
  transform: translateX(-2px);
  border-radius: 0 3px 3px 0;
  height: 45px;
  width: 90px;

  @media (max-width: 768px) {
  }

  &:focus {
    outline: 1px solid var(--main-dark);
  }
`;

const Buscar = styled.img`
  height: 18px;
`;

export default SearchBar;
