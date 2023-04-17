import React from "react";
import "./Projects.css"
import ProjectUI from "./toolComponents/ProjectUI"
import Project1 from ".././assets/selfieGenerator.png"
import Project2 from ".././assets/5minute.png"
import Project3 from ".././assets/yoursresolution.png"

const Projects = () => {
    const projectData = [
        {
            pic:Project1,
            title:"Selfie Generator",
            emoji:"📸",
            text:"Upload your photo and swap the background with a background art to make it pretty.",
            tech:["html","css","reactjs","figma"],
            link:"https://github.com/YatoAki/selfie-generator"
        },
        {
            pic:Project2,
            title:"5 Minute Chat",
            emoji:"⏳",
            text:"Share your code and create a chat room that only exist for 5 minutes. Try to get to know someone within time limit.",
            tech:["html","css","reactjs","firebase","tailwind"],
            link:"https://github.com/YatoAki/five-minute-chat"
        },
        {
            pic:Project3,
            title:"Yours Resolution",
            emoji:"📝",
            text:"Answer questions and generate a code to share your new year resolution with loved ones. (Hackathon winning project)",
            tech:["html","css","reactjs","firebase","tailwind"],
            link:"https://github.com/YatoAki/yours-resolution"
        }
    ]  

    return(
        <div className="Projects" id="projects">
            <div className="projectsText">
                <h2 className="whiteTitle">Let’s see some of my projects! 🗂</h2>
                <p className="yellowText">I hope these will convince you to hire me. 🙄</p>
            </div>
            
            {projectData.map((data,key) => {
                return <ProjectUI pic={data.pic} title={data.title} text={data.text} emoji={data.emoji} direction={key%2 === 0 ? "right" : "left"} tech={data.tech} link={data.link}/>
            })}
            
        </div>
    )
}

export default Projects