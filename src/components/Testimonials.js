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
        definitely be recommending you to everyone!!! Thank you so much!!
      </p>
    ),
    person: <p>KEMI & SENGOVA</p>,
  },

  {
    testimony: (
      <p>
        Hi Tomiwa, I can’t even begin to tell you how much we appreciate you and
        what you brought to our day. All our guests where so impressed and happy
        with the songs. You literally catered for every single person that was
        in the room. I think a few of the aunties said they took your number
        lool see new business in Bristol. But honestly thank you so much we are
        so grateful you brought life to our wedding. Much love
      </p>
    ),
    person: <p>JACOB & ALTAR</p>,
  },
  {
    testimony: (
      <p>
        Hey, I should have said thank you by now already but sorry forgot.
        Massive thanks again. You were so on point!! Lots of people kept banging
        on about how good the dj was. You adapted really well and got both
        crowds on their feet. Thanks so much”
      </p>
    ),
    person: <p>KAREN & ADRIAN</p>,
  },
];

const TestimonialsContainer = styled.div`
  color: ${colorPalette.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${colorPalette.background};
  padding-top: 8rem;

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
class Testimonials extends React.Component {
  state = { testimonyIndex: 0 };

  decrementTesimonyIndex = () => {
    this.setState((prevState) => {
      if (prevState.testimonyIndex !== 0) {
        return { testimonyIndex: prevState.testimonyIndex - 1 };
      } else {
        return { testimonyIndex: testimonies.length - 1 };
      }
    });
  };

  incrementTestimonialsIndex = () => {
    this.setState((prevState) => {
      if (prevState.testimonyIndex !== testimonies.length - 1) {
        return { testimonyIndex: prevState.testimonyIndex + 1 };
      } else {
        return { testimonyIndex: 0 };
      }
    });
  };

  render() {
    const currentTestimony = testimonies[this.state.testimonyIndex];
    return (
      <TestimonialsContainer>
        <h1>TESTIMONIALS</h1>
        <button onClick={this.decrementTesimonyIndex}>PREV</button>
        {currentTestimony.testimony}
        {currentTestimony.person}
        <button onClick={this.incrementTestimonialsIndex}>NEXT</button>
      </TestimonialsContainer>
    );
  }
}

export default Testimonials;

// the next button changes position. Keep it fixed.
// Change the text buttons to logos or something.
// Add photos?
// style the tesimonial text area div.
// change the onhover colour of the text when the scrollY position is > 0.
