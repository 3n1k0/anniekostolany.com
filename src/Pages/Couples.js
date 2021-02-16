import React from "react";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import {
  Button,
  ButtonContainer,
  GoToTopButton,
  ReviewContainer,
  Text,
  Szepalcim,
  StyledButton,
} from "../config/Ui";
import { device } from "../config/mediaquery";
import GlobalStyle from "../config/globalStyles";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 150px;
  color: #585656;
  text-align: center;

  img {
    width: 90%;

    @media ${device.desktop} {
      width: 60%;
    }
  }
`;

class Couples extends React.Component {
  render() {
    return (
      <div className="Couples">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Couple photographer in Amsterdam</title>
          <meta
            name="description"
            content="Couple photography - Amsterdam-based professional photographer"
          />
        </Helmet>
        <GlobalStyle />
        <Container>
          <Text>
            <Szepalcim>
              I bet you are adorable together, but never get 'real photos'
              taken.
            </Szepalcim>
          </Text>
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/amsterdam-wedding-28.jpg"
            alt="Jordaan wedding couple"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/karen-graham-8.jpg"
            alt="Couple in Amsterdam"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/birthday-shoot-001.jpg"
            alt="couple picnic in park"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/joordan-couple-session-10.jpg"
            alt="love shoot Amsterdam"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/joordan-couple-session-30.jpg"
            alt="love shoot Amsterdam Jordaan"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/karen-graham-25.jpg"
            alt="couple shoot Amsterdam"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/karen-graham-26.jpg"
            alt="couple shoot Amsterdam"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/ayo+ayo-6.jpg"
            alt="couple in Amsterdam"
            loading="lazy"
          />{" "}
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/betti-steve-9.jpg"
            alt="lifestyle couple session"
            loading="lazy"
          />{" "}
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/birthday-shoot-162-Edit-Edit.jpg"
            alt="lifestyle couple at home"
            loading="lazy"
          />
          <ButtonContainer data-aos="fade-down">
            <Button to={"/contact"}> Contact Annie </Button>
            <GoToTopButton
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Go to top{" "}
            </GoToTopButton>
          </ButtonContainer>
          <ReviewContainer>
            <div>
              <p>
                Annie is such a great and talented photographer! She did an
                amazing Job and we couldn´t be happier. From beginning i knew
                she is the perfect photographer and person for my planned
                marriage proposal. She took care of everything so that the
                moment was just perfect. The location, lights, position
                everything was adoreable. Additionally she is such a warm Person
                and we felt really comfortable during the shoot! She captured
                our real emotions perfectly. We can recommend her to everyone!!!
                Annie - thank you so much.
                <br />- Sebastian W.
              </p>
              <img
                src="https://static.llllllllllll.com/eniko/anniekostolany/amsterdam-proposal-18.jpg"
                alt="surprise proposal"
                loading="lazy"
              ></img>
            </div>
            <StyledButton to={"/reviews"}>What other people say</StyledButton>
          </ReviewContainer>
        </Container>
      </div>
    );
  }
}

export default Couples;
