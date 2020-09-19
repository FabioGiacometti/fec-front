import React, { useEffect, useState } from "react";
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

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      props.props.buscar(props.props.searchTerm);
    } else if (event.keyCode === 27) {
      props.props.setSearchTerm("");
    }
  };

  return (
    <SearchForm>
      <SearchInput
        autoFocus
        value={props.props.searchTerm}
        onChange={handleChange}
        placeholder="Buscar en la base"
        onKeyDown={handleEnter}
        autofocus
      />

      {props.props.searchTerm ? (
        <Eraser onClick={() => props.props.setSearchTerm("")}>×</Eraser>
      ) : null}
      <SearchButton onClick={() => props.props.buscar(props.props.searchTerm)}>
        {vw >= 590 ? "Buscar" : <Buscar src={SearchIcon}></Buscar>}
      </SearchButton>
    </SearchForm>
  );
};

const SearchForm = styled.div`
  position: relative;
  // height: 45px;
  width: 60%;
  margin-bottom: 20px;
  display: flex;

  @media (max-width: 590px) {
    // flex-direction: column;
    width: calc(100% - 40px);
  }
`;

const SearchInput = styled.input`
  border: 2px solid var(--main-dark);
  height: 45px;
  width: 100%;
  border-radius: 3px 0 0 3px;
  padding-left: 7px;

  &::placeholder {
    font-weight: bold;
  }

  &:focus {
    outline: 1px solid var(--main-dark);
  }
`;

const Eraser = styled.span`
  position: absolute;
  right: 95px;
  top: 2px;
  color: var(--main-dark);
  font-size: 2em;
  transition: all 200ms;

  @media (max-width: 590px) {
    right: 88px;
  }

  &:active {
    transform: scale(2);
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

  @media (max-width: 590px) {
  }

  &:focus {
    outline: 1px solid var(--main-dark);
  }
`;

const Buscar = styled.img`
  height: 18px;
`;

export default SearchBar;
