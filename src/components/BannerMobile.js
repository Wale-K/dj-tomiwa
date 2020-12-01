import React from "react";
import styled from "styled-components";
import DJTomiwaWhite from "../images/dj-tomiwa-white.png";
import { closeIcon, icons } from "../utilities";
import { colorPalette } from "../utilities";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Spacer = styled.div`
  height: 14rem;
  background-color: white;
  display: ${(props) => props.display};
`;

const CloseIconX = styled.svg`
  width: 2rem;
  height: 2rem;
  align-self: flex-end;
  margin: 0.5rem 0.5rem 0 0;
`;

const CollapseNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colorPalette.iconBackground};

  display: ${(props) => props.display};
  height: 3rem;
  width: 3rem;
  :hover {
    background-color: ${colorPalette.highlight};
  }
`;

const ToggleCollapsedNavBarDisplay = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  margin: 0 auto;
  background-color: ${colorPalette.selectedText};
  position: fixed;
  top: 0;
  width: 100vw;
`;

const ConentLinksDiv = styled.nav`
  a,
  a:visited {
    color: ${colorPalette.text};
    text-decoration: none;

    :hover {
      color: ${colorPalette.selectedText};
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
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
  width: 70vw;
  height: auto;
`;

const NavBarContentWithoutX = styled.div`
  align-self: center;
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
  justify-content: center;
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

  @media only screen and (min-width: 768px) {
    display: none;

    ${ConentLinksDiv} {
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
    document.getElementById("mobileBanner").style.backgroundColor =
      colorPalette.selectedText;
  } else {
    document.getElementById("mobileBanner").style.backgroundColor =
      colorPalette.background;
  }
};

class BannerMobile extends React.Component {
  state = { isNavBarCollapsed: true };

  handleCollapseNavBar = () => {
    this.setState((prevState) => {
      return {
        isNavBarCollapsed: !this.state.isNavBarCollapsed,
      };
    });
  };

  clickLinktoCollapseNavBar = () => {
    this.setState((prevState) => {
      return { isNavBarCollapsed: true };
    });
  };

  render() {
    return (
      <div>
        <BannerContainer id="mobileBanner">
          <div>
            <DJLogo src={DJTomiwaWhite} />
          </div>
          <CollapseNavBar
            display={this.state.isNavBarCollapsed ? "flex" : "none"}
            onClick={this.handleCollapseNavBar}
          >
            <p>Menu</p>
          </CollapseNavBar>

          <ToggleCollapsedNavBarDisplay
            display={!this.state.isNavBarCollapsed ? "flex" : "none"}
          >
            <CloseIconX onClick={this.handleCollapseNavBar}>
              {closeIcon}
            </CloseIconX>
            <NavBarContentWithoutX>
              <DJLogo src={DJTomiwaWhite} />
              <ConentLinksDiv>
                <ul>
                  <li onClick={this.clickLinktoCollapseNavBar}>
                    <Link to="/">HOME</Link>
                  </li>

                  <li onClick={this.clickLinktoCollapseNavBar}>
                    <Link to="/about">ABOUT</Link>
                  </li>

                  <li onClick={this.clickLinktoCollapseNavBar}>
                    <Link to="/music">MUSIC</Link>
                  </li>

                  <li onClick={this.clickLinktoCollapseNavBar}>
                    <Link to="/testimonials">TESTIMONIALS</Link>
                  </li>

                  <li onClick={this.clickLinktoCollapseNavBar}>
                    <Link to="/gallery">GALLERY</Link>
                  </li>

                  <li onClick={this.clickLinktoCollapseNavBar}>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </ConentLinksDiv>
            </NavBarContentWithoutX>

            <SocialsIconsContainer>
              {icons.contact.map((elem) => {
                return (
                  <a key={elem.url} href={elem.url} target="_blank">
                    <SocialsIcons>
                      <svg>{elem.icon}</svg>
                    </SocialsIcons>
                  </a>
                );
              })}
            </SocialsIconsContainer>
          </ToggleCollapsedNavBarDisplay>
        </BannerContainer>
        <Spacer display={this.state.isNavBarCollapsed ? "none" : "flex"} />
      </div>
    );
  }
}

export default BannerMobile;
