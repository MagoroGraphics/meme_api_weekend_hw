import React from "react";
import GalleryItem from "./GalleryItem";
import styled from "styled-components";

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: auto;
  background: #474bff;
  background: -webkit-linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
  background: linear-gradient(0deg, #474bff 0%, #bc48ff 100%);
  height: 100vh;
  overflow: auto;
`;

const MemeItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Gallery = ({ memes, userName }) => {
  const allMemes = memes.map((meme, index) => {
    return <GalleryItem key={index} memeImg={meme.url} memeName={meme.name} />;
  });

  return (
    <MainWrapper>
      <h1>Welcome to the Meme Gallery</h1>
      <MemeItemsWrapper>
        <GalleryWrapper>{allMemes}</GalleryWrapper>
      </MemeItemsWrapper>
    </MainWrapper>
  );
};

export default Gallery;
