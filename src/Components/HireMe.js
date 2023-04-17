import React from "react";
import "./HireMe.css"
import ReasonCard from "./toolComponents/ReasonCard";

const HireMe = () => {

    const reasons = [
        {
            title:"Love software development",
            emoji:"💞",
            text:"Without the commitment and thrive for knowledge, I will never be able to finish the boot camps which heavily rely on self-study!"
        },
        {
            title:"Fast learner",
            emoji:"📝",
            text:"I can’t even count the errors I had while self-studying web development. I solved them and here I am with my portfolio written with React."
        },
        {
            title:"Problem solver",
            emoji:"💡",
            text:"I can’t even count the errors I had while self-studying web development. I solved them and here I am with my portfolio written with React."
        },
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