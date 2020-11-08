import React from "react";
import styled from "styled-components";
import { icons, colorPalette } from "../utilities";

const AboutContainer = styled.div`
  padding-top: 20rem;
  background-color: ${colorPalette.background};
  color: white;
  display: flex;
  justify-content: center;
  height: calc(100vh);

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const About = (props) => {
  console.log("HERE: ", props);
  return (
    <AboutContainer>
      <h1>About</h1>
    </AboutContainer>
  );
};

export default About;
