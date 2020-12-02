import React from "react";
import styled from "styled-components";
import { icons, colorPalette } from "../utilities";
import Contact from "./Contact";

const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const FourZeroFour = styled.p`
  font-size: 80px;
  font-weight: 900;
  margin: 0;
  color: ${colorPalette.text};
`;

const Oops = styled.p`
  font-size: 40px;
  font-weight: 900;
  margin: 0;
  color: ${colorPalette.text};
`;

const Side = styled.div``;

const DirectToHomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colorPalette.highlight};
  color: ${colorPalette.text};
  :hover {
    background-color: ${colorPalette.text};
    color: ${colorPalette.background};
    cursor: pointer;
  }
`;

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  background-color: ${colorPalette.background};
  color: white;
  display: flex;
  //   height: calc(100vh);
  color: ${colorPalette.highlight};
  @media only screen and (min-width: 768px) {
    ${ErrorDiv} {
      flex-direction: row;
    }

    ${Side} {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      padding: 0 5vw;
    }

    ${DirectToHomePage} {
      height: 10vh;
    }

    ${FourZeroFour} {
      font-size: 200px;
    }
  }
`;

const ErrorPage = (props) => {
  return (
    <ErrorPageContainer>
      <ErrorDiv>
        <Side>
          <FourZeroFour>404</FourZeroFour>
        </Side>
        <Side display="flex">
          <Oops>OOPS...</Oops>
          <p>We're sorry, but something went wrong.</p>
          <DirectToHomePage>
            <a href="https://djtomiwa.olawalekoiki.co.uk/">
              <p>HOMEPAGE &#10132;</p>
            </a>
          </DirectToHomePage>
        </Side>
      </ErrorDiv>
      <Contact />
    </ErrorPageContainer>
  );
};

export default ErrorPage;
