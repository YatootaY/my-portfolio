import React from "react";
import "./ProjectUI.css"
import css from "../../assets/🦆 icon _file type css_.png"
import firebase from "../../assets/🦆 icon _file type firebase_.png"
import html from "../../assets/🦆 icon _file type html_.png"
import reactjs from "../../assets/🦆 icon _file type reactjs_.png"
import js from "../../assets/Group 15.png"
import figma from "../../assets/Figma (icon — Colour).png"
import tailwind from "../../assets/🦆 icon _file type tailwind_.png"
import ImageUI from "./ImageUI";

const ProjectUI = (props) => {


    const rightTextGenerater = () => {
        const rightText = {
            textAlign:"right",
            width:"30vw"
        }

        return(
            <div className="textArea" style={rightText}>
                <h1 >{props.title}<span>{props.emoji}</span></h1>
                <p>{props.text}</p>
                <button>Check on GitHub</button>
            </div>
        )
    }

    const leftTextGenerater = () => {
        const leftText = {
            textAlign:"left",
            width:"30vw"
        }

        return(
            <div className="textArea" style={leftText}>
                <h1 >{props.title}<span>{props.emoji}</span></h1>
                <p>{props.text}</p>
                <button>Check on GitHub</button>
            </div>
        )
    }

    return(
        <div className="ProjectUI">
            {
                props.direction === "right" ? 
                <>
                    <ImageUI imgSrc={props.pic} width={500} height={400}/>
                    {rightTextGenerater()}
                </>
                :
                <>
                    {leftTextGenerater()}
                    <ImageUI imgSrc={props.pic} width={500} height={400}/>
                </>
            }
            

            
        </div>
    )
}

export default ProjectUI