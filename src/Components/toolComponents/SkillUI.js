import React from "react";
import "./SkillUI.css"

const SkillUI = (props) => {

    const getStyle = () => {
        let style = {}
        props.direction === "left" ? style={justifyContent:"flex-end"} : style={justifyContent:"flex-start"}
        return style
    }
    return(
        <div className="skillContainer" style={getStyle()}>
            {
                props.direction === "left" ?

                <div className="skillCard">
                    <img src={props.pic} alt="" />
                    <div>
                        <h2>{props.name}</h2>
                        <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
                    </div>
                </div>

                :

                <div className="skillCard">
                    <div>
                        <h2>{props.name}</h2>
                        <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
                    </div>
                    <img src={props.pic} alt="" />
                    
                </div>
            }
            
        </div>
    )
}

export default SkillUI