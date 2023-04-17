import React from "react";
import styled from 'styled-components'

const StyledImage = styled.img`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    object-fit: cover;

    @media  screen and (max-width: 800px) {
        width:70vw;
        height:50vw;
        border: 2px solid var(--yellow)
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
        display:none;
    }
    
`

const MainDiv = styled.div`
    position:relative;
    

    @media  screen and (max-width: 800px) {
        width:100vw;
        display:flex;
        justify-content:center;
    }
`

const ImageUI = (props) => {


    return(
        <MainDiv>
            <StyledImage src={props.imgSrc} alt="" width={props.width} height={props.height}/>
            <BorderDiv width={props.width} height={props.height}/>
        </MainDiv>
        
    )
}

export default ImageUI