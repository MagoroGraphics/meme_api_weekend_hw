import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = ({memes}) => {

const allMemes = memes.map((meme, index) => {
    return <GalleryItem key= {index} memeImg={meme.url} memeName={meme.name} />
})

    return (
        <div>
            <h1>Welcome to the Meme Gallery</h1>
            <ul>
                {allMemes}
            </ul>
        </div>

    )
}

export default Gallery