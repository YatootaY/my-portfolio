import React from "react";

const ImageUI = (props) => {

    const imageStyle = {
        width:`${props.width}px`,
        height:`${props.height}px`,
        objectFit:"cover"
    }

    const borderDiv = {
        width:`${props.width}px`,
        height:`${props.height}px`,
        border: "2px solid var(--yellow)",
        position:"absolute",
        bottom:"-5px",
        left:"-10px",
        zIndex:-1
    }

    const mainDiv = {
        position:"relative"
    }

    return(
        <div style={mainDiv}>
            <img src={props.imgSrc} alt="" style={imageStyle}/>
            <div style={borderDiv}></div>
        </div>
        
    )
}

export default ImageUI