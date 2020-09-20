import React from 'react'
import styled from "styled-components";
import footerVector from "../public/images/footerVector.png"

const Footer =()=>{
    return(
        <FooterCopy>
             <FooterVector src={footerVector}/>
            2020 - Front End Cafe
        </FooterCopy>
    )
}

const FooterCopy = styled.div`
padding-bottom: 50px;
justify-content:center;
text-align: center;
font-size : 1.3em;
color: var(--main-dark);
background-color: #63C29D;
color: white;
font-weight: bold;
position:relative
`

const FooterVector = styled.img`
position: relative;
height: auto;
bottom: 53px;
width:100%;
width: 100%;
height: 100%;
min-height: 55px;

@media(max-width: 368px){
    display:none;
}
`

export default Footer