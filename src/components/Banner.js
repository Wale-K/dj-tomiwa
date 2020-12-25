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
  a,
  a:visited {
    /* color: ${colorPalette.text}; */

    color: ${(props) => props.test};
    text-decoration: none;

    :hover {
      color: ${colorPalette.highlight};
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: ${colorPalette.text};
    text-decoration: none;
    // height: 3rem;
    // width: 3rem;
    margin: 0.25rem;
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
    // height: 3rem;
    // width: 3rem;
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

  color: ${colorPalette.text};
  height: 8rem;
  box-shadow: 0px 0px 20px rgba(16, 7, 21, 1);

  @media only screen and (max-width: 768px) {
    ${CollapseNavBar} {
      display: flex;
      background-color: ${(props) => props.ccc};
    }

    ${ToggleCollapsedNavBarDisplay} {
      display: ${(props) => props.display};
      background-color: ${(props) => props.ccc};
    }

    ${ContentLinksDiv} {
      display: none;
    }
    ${DJLogo} {
      width: 80vw;
      height: auto;
    }

    ${SocialsIconsContainer} {
      display: none;
    }
  }
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
  state = { isNavBarCollapsed: true, renderedPage: "Home" };

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
            <li
              onClick={() => {
                this.handleTogglePage("Home");
              }}
            >
              <Link to="/">HOME</Link>
            </li>

            <li
              onClick={() => {
                this.handleTogglePage("About");
              }}
            >
              <Link to="/about">ABOUT</Link>
            </li>

            <li
              onClick={() => {
                this.handleTogglePage("Music");
              }}
            >
              <Link to="/music">MUSIC</Link>
            </li>

            <li>
              <Link to="/testimonials">TESTIMONIALS</Link>
            </li>

            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
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
