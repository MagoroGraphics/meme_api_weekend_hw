import React from "react";
import styled from "styled-components";

const GalleryItem = ({ memeImg, memeName }) => {
  const GalleryListItem = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1vh;
    -webkit-box-shadow: 3px 3px 10px 3px #ddd;
    -moz-box-shadow: 3px 3px 10px 3px #ddd;
    box-shadow: 3px 3px 10px 3px #ddd;
    width: 30vw;
    height:32vh;
    margin: 2vh;
    border-radius: 2vh;
    background-color: #ffb6e4;
    font-weight: bold;
  `;

  const GalleryMemeImg = styled.img`
    max-width: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border-radius: 1vh;
  `;

  const MainWrapper = styled.div`
    display: flex;
    margin:2vh;
    justify-content: center;
  `;

  return (
    <MainWrapper>
      <GalleryListItem>
        <GalleryMemeImg src={memeImg} />
        {memeName}
      </GalleryListItem>
    </MainWrapper>
  );
};

export default GalleryItem;
