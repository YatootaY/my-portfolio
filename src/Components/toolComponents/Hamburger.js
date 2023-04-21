import React, { useState } from 'react';
import "./Hamburger.css"
import icon from "../../assets/🦆 icon _menu_.png"

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const hamburger = document.querySelector(".popUpNav")
    if (isOpen){
        hamburger.classList.add("appear")
    }else{
        hamburger.classList.remove("appear")
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className="hamburger-menu">
      <button className="hamburger" onClick={toggleMenu}>
      <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
        <ul className='popUpNav'>
            <li><a href="#introduction" onClick={toggleMenu}>Introduction</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#about" onClick={toggleMenu}>About me</a></li>
            <li><a href="#hire" onClick={toggleMenu}>Reasons to hire me</a></li>
        </ul>
      
    </div>
  );
}

export default Hamburger;