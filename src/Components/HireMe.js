import React from "react";
import "./HireMe.css"
import ReasonCard from "./toolComponents/ReasonCard";

const HireMe = () => {

    const reasons = [
        {
            title:"Love Software Development",
            emoji:"💞",
            text:"Without the commitment and thrive for knowledge, I will never be able to finish the boot camps which heavily rely on self-study!"
        },
        {
            title:"Fast Learner",
            emoji:"📝",
            text:"Because of my extensive experience with self-studying, I am confident in my ability to learn new things with limited resources."
        },
        {
            title:"Problem Solver",
            emoji:"💡",
            text:"I can’t even count the errors I had while self-studying web development. I solved them and here I am with my portfolio written with React."
        },
        {
            title:"Great Communicator",
            emoji:"📣",
            text:"I spend a significant amount of time in the education field where communication is the key. I love speaking with people and building a relationship."
        }
    ]

    return(
        <div className="HireMe">
            <p className="yellowText">Now the important part 🚨,</p>
            <h2 className="whiteTitle">Why should you hire me?</h2>
            <p>Here are some of the top reasons,</p>
            <div className="ReasonCards">
                {
                    reasons.map((data) => {
                        return <ReasonCard title={data.title} emoji={data.emoji} text={data.text}/>
                    })
                }
                
            </div>
        </div>
    )
}

export default HireMe