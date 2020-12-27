import React from "react";
import styled from "styled-components";
import DJTomiwaWhite from "../images/dj-tomiwa-white.png";
import { icons } from "../utilities";
import { colorPalette } from "../utilities";
import { Link } from "react-router-dom";

const CollapseNavBar = styled.div`
  background-color: ${colorPalette.highlight};
  display: none;
`;

const ToggleCollapsedNavBarDisplay = styled.div`
  display: none;
`;

const ContentLinksDiv = styled.nav`
  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    text-decoration: none;
    margin: 0.25rem;
  }
`;

const BannerOption = styled.span`
  transition: 0.5s;
  color: ${(props) => props.colour};
  :hover {
    color: ${colorPalette.highlight};
    cursor: pointer;
  }
`;

const DJLogo = styled.img`
  width: auto;
  height: 1.5rem;
`;

const SocialsIcons = styled.div`
  display: flex;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  align-items: center;
  background-color: #21072c;

  :hover {
    background-color: ${colorPalette.highlight};
    cursor: pointer;
  }

  svg {
    color: ${colorPalette.white};
    height: 1rem;
    width: auto;
  }
`;
const SocialsIconsContainer = styled.div`
  a,
  a:visited {
    color: ${colorPalette.text};
    text-decoration: none;
    margin: 0.25rem;
  }
  display: flex;
`;

const BannerContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  font-weight: 9000;
  background-color: ${colorPalette.background};
  height: 8rem;
  box-shadow: 0px 0px 20px rgba(16, 7, 21, 1);
`;

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.documentElement.scrollTop > 0) {
    document.getElementById("banner").style.backgroundColor =
      colorPalette.selectedText;
    document.getElementById("mobile").style.backgroundColor =
      colorPalette.selectedText;
  } else {
    document.getElementById("banner").style.backgroundColor =
      colorPalette.background;
    document.getElementById("mobile").style.backgroundColor =
      colorPalette.background;
  }
};

class Banner extends React.Component {
  state = { isNavBarCollapsed: true, renderedPage: "" };

  handleTogglePage = (arg) => {
    this.setState({
      renderedPage: arg,
    });
  };

  render() {
    return (
      <BannerContainer id="banner">
        <div>
          <DJLogo src={DJTomiwaWhite} />
        </div>
        <CollapseNavBar display="flex"></CollapseNavBar>
        <ToggleCollapsedNavBarDisplay></ToggleCollapsedNavBarDisplay>

        <ContentLinksDiv>
          <ul>
            <li>
              <Link to="/">
                <BannerOption
                  colour={
                    this.state.renderedPage === "Home"
                      ? colorPalette.highlight
                      : colorPalette.text
                  }
                  onClick={() => {
                    this.handleTogglePage("Home");
                  }}
                >
                  HOME
                </BannerOption>
              </Link>
            </li>

            <li>
              <Link to="/about">
                <BannerOption
                  colour={
                    this.state.renderedPage === "About"
                      ? colorPalette.highlight
                      : colorPalette.text
                  }
                  onClick={() => {
                    this.handleTogglePage("About");
                  }}
                >
                  ABOUT
                </BannerOption>
              </Link>
            </li>

            <li>
              <Link to="/music">
                <BannerOption
                  colour={
                    this.state.renderedPage === "Music"
                      ? colorPalette.highlight
                      : colorPalette.text
                  }
                  onClick={() => {
                    this.handleTogglePage("Music");
                  }}
                >
                  MUSIC
                </BannerOption>
              </Link>
            </li>

            <li>
              <Link to="/testimonials">
                <BannerOption
                  colour={
                    this.state.renderedPage === "Testimonials"
                      ? colorPalette.highlight
                      : colorPalette.text
                  }
                  onClick={() => {
                    this.handleTogglePage("Testimonials");
                  }}
                >
                  TESTIMONIALS
                </BannerOption>
              </Link>
            </li>

            <li>
              <Link to="/gallery">
                <BannerOption
                  colour={
                    this.state.renderedPage === "Gallery"
                      ? colorPalette.highlight
                      : colorPalette.text
                  }
                  onClick={() => {
                    this.handleTogglePage("Gallery");
                  }}
                >
                  GALLERY
                </BannerOption>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <BannerOption
                  colour={
                    this.state.renderedPage === "Contact"
                      ? colorPalette.highlight
                      : colorPalette.text
                  }
                  onClick={() => {
                    this.handleTogglePage("Contact");
                  }}
                >
                  CONTACT
                </BannerOption>
              </Link>
            </li>
          </ul>
        </ContentLinksDiv>
        <SocialsIconsContainer>
          {icons.banner.map((elem) => {
            return (
              <a key={elem.url} href={elem.url} target="_blank">
                <SocialsIcons>
                  <svg>{elem.icon}</svg>
                </SocialsIcons>
              </a>
            );
          })}
        </SocialsIconsContainer>
      </BannerContainer>
    );
  }
}

export default Banner;

// when you click on a page the text in the navbar needs to be a different colour.
