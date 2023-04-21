import React from "react"
import "./Nav.css"
import Hamburger from "./toolComponents/Hamburger"

const Nav = () => {
    return(
        <header className="Nav">
            <h1>Knlk</h1>
            <ul className="mainNav">
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#hire">Reasons to hire me</a></li>
            </ul>
            <Hamburger/>
        </header>
    )
}

export default Nav