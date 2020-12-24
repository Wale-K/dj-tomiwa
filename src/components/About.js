import React from "react";
import styled from "styled-components";
import { colorPalette } from "../utilities";

const AboutContainer = styled.div`
  padding-top: 8rem;
  background-color: ${colorPalette.background};
  color: white;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 8rem);

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const About = (props) => {
  return <AboutContainer></AboutContainer>;
};

export default About;
