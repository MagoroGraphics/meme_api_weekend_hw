import React from "react";
import styled from "styled-components";

const MemeTestImage = ({meme}) => {


    return (
        <section>
                <img src={meme} alt="meme" class="meme"></img>
            </section>
    )
}

export default MemeTestImage