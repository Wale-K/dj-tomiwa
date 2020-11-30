import React from "react";
import styled from "styled-components";
import { colorPalette } from "../utilities";
import { pictures } from "../Pictures";

const ImagesWrapper = styled.div`
  img {
    height: 10rem;
    width: auto;
    margin: 2rem;
    border: solid 1px ${colorPalette.highlight};
    border-radius: 5px;
  }
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
`;

const GalleryContainer = styled.div`
  color: ${colorPalette.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  background-color: ${colorPalette.background};
  padding-top: 8rem;

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <ImagesWrapper>
        {pictures.map((elem) => {
          return <img key={elem} src={elem} />;
        })}
      </ImagesWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
