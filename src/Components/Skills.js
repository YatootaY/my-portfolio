import React from "react";
import "./Skills.css"
import miit from "../assets/miit.png"
import appAcademy from "../assets/app academy.png"
import odinProject from "../assets/odinProject.png"
import meta from "../assets/meta.png"
import SkillUI from "./toolComponents/SkillUI";

const Skills = () => {

    const skillsHistory = [
        {
            pic:miit,
            name:"Myanmar Institute of Technology",
            text:"I learned <span>C programming</span> in my first year of university and got a taste of programming. In addition to that, I have also done <span>embedded programming</span> using Arduino."
        },
        {
            pic:appAcademy,
            name:"App Academy Open",
            text:"During my time there, I learned the <span>Ruby programming language</span> and built command-line interface (CLI) programs using <span>object-oriented programming (OOP)</span> concepts."
        },
        {
            pic:odinProject,
            name:"The Odin Project",
            text:"I learned how to create fully functional web applications using <span>ReactJS</span> as my front end and backend-as-a-service (BaaS) solutions like <span>Firebase</span> as my back end."
        },
        {
            pic:meta,
            name:"Meta Front-end Developer Professional Certificate",
            text:"I learned to develop react app in an organized way. I also learned how to use <span>Figma</span> to improve the <span>UI/UX</span> of my webpage."
        }
    ]

    return(
        <div className="Skills">
            <h2 className="whiteText" style={{textAlign:"center"}}>Where did I learn those skills?</h2>
            <p className="yellowText" style={{textAlign:"center"}}>I am glad you asked! 🧐</p>
            <div className="skillsHistory">
                {
                    skillsHistory.map((data,key) => {
                        return <SkillUI pic={data.pic} name={data.name} text={data.text} direction={key%2 === 0 ? "right" : "left"}/>
                    })
                }
                
            </div>
        </div>
    )
}

export default Skills