import React from "react";
import "./WorkCard.css"

const WorkCard = (props) => {
    return(
        <div className="WorkCard hidden">
            <img src={props.pic} alt="" />
            <h2>{props.name}</h2>
        </div>
    )
}

export default WorkCard