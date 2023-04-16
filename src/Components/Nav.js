import React from "react"
import "./Nav.css"

const Nav = () => {
    return(
        <header className="Nav">
            <h1>My Portfolio</h1>
            <ul>
                <li><a href="">Introduction</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About me</a></li>
                <li><a href="">Reason to hire me</a></li>
                <li><a href="">Resume</a></li>
            </ul>
        </header>
    )
}

export default Nav