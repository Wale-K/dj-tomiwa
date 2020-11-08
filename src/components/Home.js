import React from "react";
import styled from "styled-components";
import { icons, colorPalette } from "../utilities";

const HomeContainer = styled.div`
  padding-top: 20rem;
  background-color: ${colorPalette.background};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh);

  @media only screen and (min-width: 768px) {
   
    padding-top: 8rem;
`;

const Home = (props) => {
  console.log(props);
  return (
    <HomeContainer>
      <p>You are now in the zone with</p>
      <h1>DJ TOMIWA</h1>
    </HomeContainer>
  );
};

export default Home;
