import React from "react";
import styled from "styled-components";
import { icons, colorPalette } from "../utilities";

const GalleryContainer = styled.div`
  color: ${colorPalette.text};
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${colorPalette.background};
  padding-top: 20rem;

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const Gallery = (props) => {
  return (
    <GalleryContainer>
      <h1>Gallery</h1>
    </GalleryContainer>
  );
};

export default Gallery;
