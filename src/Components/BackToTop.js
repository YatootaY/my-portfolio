import React from "react";
import backToTop from "../assets/🦆 icon _arrow circle right_.png"
import "./BackToTop.css"

const BackToTop = () => {

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    return(
        <div  id='backToTopContainer' onClick={handleClick}>
            <img src={backToTop} alt="" />
        </div>
            
        
    )
}

export default BackToTop