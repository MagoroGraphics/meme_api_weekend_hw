import React from "react";
import styled from 'styled-components';

const GalleryItem = ({memeImg, memeName}) => {
    
    const GalleryListItem = styled.li`
        display: flex;
        flex-direction: column;
        text-align: center;
        
    `

    const GalleryMemeImg = styled.img`
        max-width: 500px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        
    `
    
    return (
        <GalleryListItem>
            <GalleryMemeImg src={memeImg}/>
            {memeName}
        </GalleryListItem>
    )
}

export default GalleryItem