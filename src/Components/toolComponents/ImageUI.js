import React from "react";
import styled from 'styled-components'

const StyledImage = styled.img`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    object-fit: cover;

    @media  screen and (max-width: 800px) {
        width:80vw;
        height:60vw;
    }
`;

const BorderDiv = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border: 2px solid var(--yellow);
    position: absolute;
    bottom: -5px;
    left: -10px;
    z-index: -1;

    @media  screen and (max-width: 800px) {
        width:80vw;
        height:60vw;
    }
    
`

const ImageUI = (props) => {


    const mainDiv = {
        position:"relative"
    }

    return(
        <div style={mainDiv}>
            <StyledImage src={props.imgSrc} alt="" width={props.width} height={props.height}/>
            <BorderDiv width={props.width} height={props.height}/>
        </div>
        
    )
}

export default ImageUI