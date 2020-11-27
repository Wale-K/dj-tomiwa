import React from "react";
import styled from "styled-components";
import { colorPalette } from "../utilities";

const HomeContainer = styled.div`
  @keyframes example {
    0% {
      color: ${colorPalette.background};
    }

    50% {
      color: ${colorPalette.background};
    }
    100% {
      color: ${colorPalette.white};
    }
  }

  p,
  h1 {
    animation-name: example;
    animation-duration: 10s;
  }

  h1 {
    font-size: 3rem;
  }

  p:first-child {
    animation-duration: 2s;
  }

  p:nth-child(2) {
    animation-duration: 6s;
  }

  padding-top: 15rem;
  background-color: ${colorPalette.background};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 15rem);

  @media only screen and (min-width: 768px) {
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <p duration="4s">You are now in the zone with</p>
      <p>2020 UK African Wedding Awards DJ of the Year</p>
      <h1>DJ TOMIWA</h1>
    </HomeContainer>
  );
};

export default Home;
