import React from "react";
import BannerMobile from "./components/BannerMobile";
import Banner from "./components/Banner";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { colorPalette } from "./utilities";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Home from "./components/Home";
import About from "./components/About";
import Music from "./components/Music";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

body {font-family: "Oswald", sans-serif; margin: 0;}
background-color: ${colorPalette.background}
`;

const Mobile = styled.div``;

const Laptop = styled.div`
  display: none;
`;

const AppContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    ${Mobile} {
      display: none;
    }

    ${Laptop} {
      display: flex;
    }
  }
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Mobile>
          <BannerMobile />
        </Mobile>
        <Laptop>
          <Banner />
        </Laptop>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} exact path="/about" />
          <Route component={Music} path="/music" />
          <Route component={Testimonials} exact path="/testimonials" />
          <Route component={Gallery} exact path="/gallery" />
          <Route component={Contacts} exact path="/contacts" />
          <Route component={ErrorPage} path="/" />
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
