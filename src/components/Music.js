import React from "react";
import styled from "styled-components";
import { colorPalette } from "../utilities";

const VideosWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const SoundCloudWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

const MusicContainer = styled.div`
  color: ${colorPalette.text};
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${colorPalette.background};
  padding-top: 8rem;

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const Music = (props) => {
  return (
    <MusicContainer>
      <h1>Music</h1>

      <VideosWrapper>
        <iframe
          title="80s party mix"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-C8TDEXgIQk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ padding: "1rem" }}
        ></iframe>

        <iframe
          title="afrobeats alchemy 5"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LFdV-yjj6AQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ padding: "1rem" }}
        ></iframe>
      </VideosWrapper>
      <SoundCloudWrapper>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/653233811&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          style={{ paddingTop: "1rem" }}
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: "100",
            paddingBottom: "1rem",
          }}
        >
          <a
            href="https://soundcloud.com/djtomiwa"
            title="DJ Tomiwa"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            DJ Tomiwa
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/djtomiwa/aa5ice"
            title="Afrobeat Alchemy 5: Ice Edition (2019 Afrobeats Mix)"
            target="_blank"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Afrobeat Alchemy 5: Ice Edition (2019 Afrobeats Mix)
          </a>
        </div>
      </SoundCloudWrapper>
      <iframe
        width="100%"
        height="120"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdjtomiwa%2Fafrobeat-alchemy-4-2018-afrobeats-mix-mixed-by-dj-tomiwa%2F"
        frameborder="0"
        style={{ width: "80%", padding: "1rem" }}
      ></iframe>
    </MusicContainer>
  );
};

export default Music;
