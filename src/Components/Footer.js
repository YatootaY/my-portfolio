import React from "react";
import "./Footer.css"
import githubIcon from "../assets/🦆 icon _github_.png"

const Footer = () => {

    return(
        <div className="Footer">
            <a href="https://github.com/YatoAki/my-portfolio" target="_blank"><h4>Designed & Built by Kaung Nay Lin Khant</h4><img src={githubIcon} alt="" /></a>
        </div>
    )
}

export default Footer