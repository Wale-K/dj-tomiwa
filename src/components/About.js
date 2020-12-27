import React from "react";
import styled from "styled-components";
import { colorPalette } from "../utilities";

const AboutContainer = styled.div`
  padding-top: 8rem;
  background-color: ${colorPalette.background};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 8rem);
  p {
    max-width: 80vw;
  }

  p:first-child {
    margin-top: 8rem;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const About = (props) => {
  return (
    <AboutContainer>
      <p>I am a Nigerian British-born International DJ based in the UK.</p>
      <p>
        I play Afrobeats, Christian/Gospel, Old Skl RnB & HipHop and much more!
      </p>
    </AboutContainer>
  );
};

export default About;
