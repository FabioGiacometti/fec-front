//import FECLogo from "../public/images/fec-logo.png";
import React from "react";
import CardList from "./CardList";
//import styled from "styled-components";

const LinkSearcher = ()=>{
    return(
        <>
            <header>
                <div>
                    <input type="text" placeholder="Search Links by tags here..."></input>
                </div>    
            </header>
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
        </> 
    )
}

export default LinkSearcher;