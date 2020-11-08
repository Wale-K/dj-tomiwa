import React from "react";
import styled from "styled-components";
import { icons, colorPalette } from "../utilities";

const testimonies = [
  {
    testimony: (
      <p>
        DJ Tomiwa…we want to say THANK YOU SO MUCH for being our DJ for both our
        traditional and white wedding. Both days were awesome not only because
        of the songs you played but because of your attitude before and during
        the big days. It was great to have you on our team and we will
        definitely be recommending you to everyone!!! Thank you so much!! KEMI &
        SENGOVA
      </p>
    ),
  },

  {
    testimony: (
      <p>
        Hi Tomiwa, I can’t even begin to tell you how much we appreciate you and
        what you brought to our day. All our guests where so impressed and happy
        with the songs. You literally catered for every single person that was
        in the room. I think a few of the aunties said they took your number
        lool see new business in Bristol. But honestly thank you so much we are
        so grateful you brought life to our wedding. Much love” JACOB & ALTAR
      </p>
    ),
  },
  {
    testimony: (
      <p>
        Hey, I should have said thank you by now already but sorry forgot.
        Massive thanks again. You were so on point!! Lots of people kept banging
        on about how good the dj was. You adapted really well and got both
        crowds on their feet. Thanks so much” KAREN & ADRIAN
      </p>
    ),
  },
];

// Hey, I should have said thank you by now already but sorry forgot. Massive
// thanks again. You were so on point!! Lots of people kept banging on about
// how good the dj was. You adapted really well and got both crowds on their
// feet. Thanks so much” KAREN & ADRIAN

const TestimonialsContainer = styled.div`
  color: ${colorPalette.text};
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${colorPalette.background};
  padding-top: 20rem;

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const Test = styled.div`
  width: 90vw;
  background-color: blue;
`;

const TestimoniesCollection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80vw;

  p {
    margin: 0 10vw;
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <div>
        <h1>TESTIMONIALS</h1>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
