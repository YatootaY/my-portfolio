import React from "react";
import "./ReasonCard.css"

const ReasonCard = (props) => {

    return(
        <div className="ReasonCard hidden">
            <span>{props.emoji}</span>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}


export default ReasonCard