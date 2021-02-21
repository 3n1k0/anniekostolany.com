import React from "react";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import {
  Button,
  ButtonContainer,
  GoToTopButton,
  ReviewContainer,
  MainContainer,
  StyledButton,
  DoubleImageContainer,
} from "../config/Ui";
import GlobalStyle from "../config/globalStyles";
import Image from "../components/Image";

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
        <MainContainer>
          <p>
            I bet you are adorable together, but never get 'real photos' taken.
          </p>
          <Image
            src="amsterdam-zandvoort-wedding/amsterdam-wedding-28.jpg"
            alt="Jordaan wedding couple"
          />
          <Image
            src="karen-graham/karen-graham-8.jpg"
            alt="Couple in Amsterdam"
          />
          <Image
            src="marina-and-decio/birthday-shoot-001.jpg"
            alt="couple picnic in park"
          />

          <Image
            src="mix/joordan-couple-session-10.jpg"
            alt="love shoot Amsterdam"
          />
          <Image
            src="mix/joordan-couple-session-30.jpg"
            alt="couple picnic in park"
          />
          <Image
            src="karen-graham/karen-graham-25.jpg"
            alt="Couple shoot Amsterdam"
          />
          <Image
            src="karen-graham/karen-graham-26.jpg"
            alt="Couple in Amsterdam"
          />
          <Image src="ayo+ayo/ayo+ayo-6.jpg" alt="couple in Amsterdam" />

          <DoubleImageContainer>
            <Image
              data-aos="fade-right"
              src="betti-steve/betti-steve-9.jpg"
              alt="lifestyle couple session"
            />
            <Image
              data-aos="fade-left"
              src="marina-and-decio/birthday-shoot-162-Edit-Edit.jpg"
              alt="lifestyle couple at home"
            />
          </DoubleImageContainer>

          <ButtonContainer>
            <Button to={"/contact"}> Contact Annie </Button>
            <GoToTopButton
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Go to top{" "}
            </GoToTopButton>
          </ButtonContainer>
        </MainContainer>
        <ReviewContainer>
          <div>
            <p>
              Annie is such a great and talented photographer! She did an
              amazing Job and we couldn´t be happier. From beginning i knew she
              is the perfect photographer and person for my planned marriage
              proposal. She took care of everything so that the moment was just
              perfect. The src, lights, position everything was adoreable.
              Additionally she is such a warm Person and we felt really
              comfortable during the shoot! She captured our real emotions
              perfectly. We can recommend her to everyone!!! Annie - thank you
              so much.
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
      </div>
    );
  }
}

export default Couples;
