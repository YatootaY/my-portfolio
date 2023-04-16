import React from "react";
import "./Hero.css"
import css from "../assets/🦆 icon _file type css_.png"
import firebase from "../assets/🦆 icon _file type firebase_.png"
import html from "../assets/🦆 icon _file type html_.png"
import reactjs from "../assets/🦆 icon _file type reactjs_.png"
import js from "../assets/Group 15.png"
import figma from "../assets/Figma (icon — Colour).png"
import tailwind from "../assets/🦆 icon _file type tailwind_.png"

const Hero = () => {
    return(
        <div className="Hero">
            <p className="yellow">Hello there ✋, I am</p>
            <h1>Kaung Nay Lin Khant</h1>
            <h1 className="gray">I make <span>ideas</span> comes to life.</h1>
            <p className="heroPara">
                I am a passionate React Developer who loves
                turning ideas into working apps. I enjoy
                working in a fast-paced environment where I
                receive opportunities to use and improve my
                skills.
            </p>
            <div className="heroImg">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={reactjs} alt="" />
                <img src={firebase} alt="" />
                <img src={tailwind} alt="" />
                <img src={figma} alt="" />
            </div>
        </div>
    )
}

export default Hero