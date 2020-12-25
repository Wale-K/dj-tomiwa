import React from "react";
import styled from "styled-components";
import { colorPalette } from "../utilities";
import hinata from "../images/hinata.jpeg";
import simon from "../images/simon.jpeg";
import endeavour from "../images/endeavour.png";

const testimonies = [
  {
    testimony:
      "DJ Tomiwa…we want to say THANK YOU SO MUCH for being our DJ for both our traditional and white wedding. Both days were awesome not only because of the songs you played but because of your attitude before and during the big days. It was great to have you on our team and we will definitely be recommending you to everyone!!! Thank you so much!!",
    person: <p>KEMI & SENGOVA</p>,
    picture: hinata,
  },

  {
    testimony:
      "Hi Tomiwa, I can’t even begin to tell you how much we appreciate you and what you brought to our day. All our guests where so impressed and happy with the songs. You literally catered for every single person that was in the room. I think a few of the aunties said they took your number lool see new business in Bristol. But honestly thank you so much we are so grateful you brought life to our wedding. Much love.",
    person: <p>JACOB & ALTAR</p>,
    picture: simon,
  },
  {
    testimony:
      "Hey, I should have said thank you by now already but sorry forgot. Massive thanks again. You were so on point!! Lots of people kept banging on about how good the dj was. You adapted really well and got both crowds on their feet. Thanks so much.",
    person: <p>KAREN & ADRIAN</p>,
    picture: endeavour,
  },
];

const TestimonialsPictures = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
  width: 80vw;
`;

const Picture = styled.img`
  height: 3rem;
  width: 3rem;
  margin: 2rem 0 0 0;
  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
  transition: 0.5s;
  :hover {
    cursor: pointer;

    border-color: ${colorPalette.highlight};
  }
`;

const TestimonyArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 60%;
`;

const NameandPicture = styled.div`
  width: inherit;
`;

const TestimonialsContainer = styled.div`
  color: ${colorPalette.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 108vh;
  background-color: ${colorPalette.background};
  padding-top: 8rem;

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
    ${TestimonyArea} {
      height: 40%;
    }

    ${TestimonialsPictures} {
      width: 80vw;
      justify-content: center;
      img {
        margin: 0 2rem;
      }
    }
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

  handleToggleTestimonial = (selectedTestimony) => {
    this.setState({
      testimonyIndex: selectedTestimony,
    });
  };

  render() {
    const currentTestimony = testimonies[this.state.testimonyIndex];
    return (
      <TestimonialsContainer>
        <TestimonyArea>
          <p>{currentTestimony.testimony}</p>
          <NameandPicture>
            {currentTestimony.person}
            <TestimonialsPictures>
              {testimonies.map((testimony, index) => {
                return (
                  <Picture
                    alt=""
                    key={testimony.person}
                    src={testimony.picture}
                    onClick={() => {
                      this.handleToggleTestimonial(index);
                    }}
                    border="solid 10px"
                    borderColor={
                      this.state.testimonyIndex === index
                        ? colorPalette.highlight
                        : "transparent"
                    }
                  />
                );
              })}
            </TestimonialsPictures>
          </NameandPicture>
        </TestimonyArea>
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
