import React from "react";
import styled from "styled-components";
import { icons, colorPalette } from "../utilities";

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${(props) => props.align};
  width: 50vw;
  padding: ${(props) => props.padding};
`;

const ContactInfoTitle = styled.p`
  font-weight: bold;
  color: ${colorPalette.highlight};
`;

const SocialsIcons = styled.div`
  display: flex;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  align-items: center;
  background-color: ${colorPalette.bannerColor};
  margin: 0.25rem;

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

const ContactIconsContainer = styled.div`
  display: flex;
`;

const AllContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10vh 0 30vh;
  width: 100vw;
`;

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  width: 100vw;
  align-items: center;
  color: white;
  padding-top: 8rem;
  background-color: ${colorPalette.background};

  a,
  a:visited {
    color: ${colorPalette.text};
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    ${AllContactInfoContainer} {
      flex-direction: column;
      margin: 10vh 0 20vh;
    }

    ${ContactInfo} {
      text-align: center;

      width: 100vw;
      padding: 0;
      margin: 0;
    }
  }
`;

const Contact = (props) => {
  return (
    <ContactContainer>
      <AllContactInfoContainer>
        <ContactInfo align="right" padding="0 6rem 0 0">
          <ContactInfoTitle>PHONE</ContactInfoTitle>
          <a href="tel:+447861257886">
            <p>+44 7861 257 886</p>
          </a>
        </ContactInfo>
        <ContactInfo align="left" padding="0 0 0 6rem">
          <ContactInfoTitle>EMAIL</ContactInfoTitle>
          <a href="mailto:djtomiwa@hotmail.com">
            <p>DJTOMIWA@HOTMAIL.COM</p>
          </a>
        </ContactInfo>
      </AllContactInfoContainer>
      <ContactIconsContainer>
        {icons.contact.map((elem) => {
          return (
            <a key={elem.url} href={elem.url} target="_blank">
              <SocialsIcons>
                <svg>{elem.icon}</svg>
              </SocialsIcons>
            </a>
          );
        })}
      </ContactIconsContainer>
    </ContactContainer>
  );
};

export default Contact;
