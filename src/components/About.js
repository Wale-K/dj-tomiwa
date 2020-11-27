import React from "react";
import styled from "styled-components";
import { colorPalette } from "../utilities";

const AboutContainer = styled.div`
  padding-top: 8rem;
  background-color: ${colorPalette.background};
  color: white;
  display: flex;
  justify-content: center;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const About = (props) => {
  console.log("HERE: ", props);
  return <AboutContainer></AboutContainer>;
};

export default About;
