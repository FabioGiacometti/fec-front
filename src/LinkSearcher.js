//import FECLogo from "../public/images/fec-logo.png";
import React from "react";
import CardList from "./CardList";
import styled from "styled-components";
import LinksHeader from './LinksHeader'

const LinkSearcher = ()=>{
    return(
        <LinkWrapper>
            <LinksHeader></LinksHeader>
            <section>
                <h2>56 
                    <span>
                        Links were found
                    </span>
                    <span>
                        we´ll hope you find what you are looking for
                    </span>
                </h2>
                <CardList/>
            </section>
        </LinkWrapper> 
    )
}


const LinkWrapper = styled.div`
  background-color: #7BEBBF;
  width:100%;
`;



export default LinkSearcher;

