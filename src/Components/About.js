import React from "react";
import "./About.css"
import myPic from "../assets/mypic.jpg"
import ImageUI from "./toolComponents/ImageUI";

const About = () => {
    return(
        <div className="About" id="about">
            <div className="aboutText">
                <p className="yellowText">Still having confused feeling ❓</p>
                <h2 className="whiteTitle">Let’s get to know better!</h2>
                <p className="aboutPara">
                    Hello, my name is Kaung Nay Lin Khant. I enjoy creating web apps that may make our life easier. My interest in web development started in 2021 when I try to explore new things during the Covid-19 lockdown. The ability to create a useful product out of thin air attracts me to become a developer.
                    <br/><br/>
                    To this day, I have been working as Computer Science Instructor where I have to teach HTML/CSS and Python programming to students.
                    <br/><br/>
                    Now I am ready to set up my game by becoming a full-time developer where it is my job to turn ideas into fully functional apps.
                </p>
                <p className="aboutList">
                    I am now working with
                    <ul>
                        <div>
                            <li>ReactJS</li>
                            <li>Tailwind CSS</li>
                            <li>Firebase BaaS</li>
                        </div>
                        <div>
                            <li>Git</li>
                            <li>Figma</li>
                            <li>Adobe Illustrator</li>
                        </div>
                    </ul>
                </p>
            </div>
            <ImageUI imgSrc={myPic} width={300} height={300}/>
        </div>
    )
}

export default About