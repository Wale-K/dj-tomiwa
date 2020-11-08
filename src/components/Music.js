import React from "react";
import styled from "styled-components";
import { icons, colorPalette } from "../utilities";

const MusicContainer = styled.div`
  color: ${colorPalette.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${colorPalette.background};
  padding-top: 20rem;

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const Music = (props) => {
  return (
    <MusicContainer>
      <h1>Music</h1>

      {/* Add music from the different socials here. */}

      <iframe
        width="70%"
        height="70%"
        src="https://www.youtube.com/embed/-C8TDEXgIQk"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </MusicContainer>
  );
};

export default Music;
