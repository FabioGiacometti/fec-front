import React from "react";
import CardList from "./CardList";
import styled from "styled-components";
import LinksHeader from "./LinksHeader";

const LinkSearcher = () => {
  return (
    <LinkWrapper>
      <LinksHeader />
      <CardList />
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  background-color: #7bebbf;
  width: 100%`;
;

export default LinkSearcher;

