import React from "react";
import "./Work.css"
import WorkCard from "./toolComponents/WorkCard";
import ConceptX from "../assets/ConceptX.png"
import LatTwae from "../assets/LatTwae.png"
import CTLA from "../assets/CTLA.jpg"

const Work = () => {

    const workHistory = [
        {
            pic:CTLA,
            name:"Code Tech & Learn Academy"
        },
        {
            pic:LatTwae,
            name:"Lat Twae Education"
        },
        {
            pic:ConceptX,
            name:"ConceptX International School"
        }
    ]

    return(
        <div className="Work">
            <div className="workIntro">
                <h2 className="whiteTitle">What is my work experience?</h2>
                <p>I had to leave school earlier than expected due to the circumstances in my country.</p>
            </div>
            <div className="workDetails">
                <h2>However,</h2>
                <p>I have a strong understanding of programming languages and also skilled at explaining complex concepts, which enabled me to work as a <span>Computer Science Instructor</span> in the following organizations.</p>
            </div>
            <div className="workCards">
                {
                    workHistory.map((data) => {
                        return <WorkCard pic={data.pic} name={data.name}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default Work