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
            text:"Upload your photo and swap the background with a background art to make it pretty."
        },
        {
            pic:Project2,
            title:"5 Minute Chat",
            emoji:"⏳",
            text:"Share your code and create a chat room that only exist for 5 minutes. Try to get to know someone within time limit."
        },
        {
            pic:Project3,
            title:"Yours Resolution",
            emoji:"📝",
            text:"Answer questions and generate a code to share your new year resolution with loved ones. (Hackathon winning project)"
        }
    ]  

    return(
        <div>
            {projectData.map((data,key) => {
                return <ProjectUI pic={data.pic} title={data.title} text={data.text} emoji={data.emoji} direction={key%2 == 0 ? "right" : "left"}/>
            })}
            
        </div>
    )
}

export default Projects