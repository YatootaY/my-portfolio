import React,{useEffect} from "react";
import backToTop from "../assets/🦆 icon _arrow circle right_.png"
import "./BackToTop.css"

const BackToTop = () => {

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    const toggleBackToTop = () => {
        const backToTopButton = document.querySelector('.backToTopContainer');
        if (window.scrollY > 500) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      };

    useEffect(() => {
        window.addEventListener('scroll', toggleBackToTop);
    })

    return(
        <div  className='backToTopContainer' onClick={handleClick}>
            <img src={backToTop} alt="" />
        </div>
            
        
    )
}

export default BackToTop