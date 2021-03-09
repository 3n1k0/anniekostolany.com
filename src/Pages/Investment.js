import React from "react";
import { device } from "../config/mediaquery";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { Button, ButtonContainer, Gallery, GoToTopButton } from "../config/Ui";
import GlobalStyle from "../config/globalStyles";
import { NavLink } from "react-router-dom";
import Image from "../components/Image";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 140px;
  margin: 0 auto;
  color: #585656;
  text-align: left;
  position: relative;
  p {
    max-width: 90%;
    padding-bottom: 20px;
    margin: 0 auto;
    @media ${device.desktop} {
      max-width: 60%;
    }
  }
`;

const Information = styled.div`
  height: 100%;
  width: 100%;
  opacity: 1;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  padding-bottom: 60px;
  @media ${device.tablet} {
    width: 70%;
    margin: 0 auto;
  }
  p {
    width: 100%;
  }
  h1 {
    padding: 40px;
    text-align: center;
  }
`;

const InnerContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  margin: 0 auto;
  background: rgba(230, 142, 78, 0.4);
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  @media ${device.tablet} {
    width: 70%;
  }
  p {
    font-size: 16px;
    max-width: 580px;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 600px;
    padding: 20px;
  }
  div {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} {
      flex-direction: column-reverse;
    }
    @media ${device.desktop} {
      flex-direction: row;
    }
  }
`;

class Investment extends React.Component {
  render() {
    return (
      <div className="Investment">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book a professional photographer</title>
          <meta
            name="description"
            content="Book a professional photographer in Amsterdam"
          />
        </Helmet>

        <Container>
          <GlobalStyle />
          <Gallery>
            <Image src="/githa-en-allard/wedding-55.jpg" alt="bride on field" />
            <Image src="/githa-en-allard/wedding-44.jpg" alt="detail closeup" />
            <Image
              src="/yalda-en-wesley/Yalda%20en%20Wesley-69.jpg"
              alt="bride on field"
            />
          </Gallery>

          <TextContainer>
            <InnerContainer>
              <div>
                <p>
                  It's an honor that you are considering Annie Kostolany
                  Photography - Amsterdam Photographer to capture one of the
                  most important moments of your life for YOU and YOUR family.
                </p>
                <p>
                  We begin the planning with an in-person or phone consultation
                  where we will gather all the desires and aspects of what you
                  are expecting for your session, including color palette,
                  wardrobe, styling, any personal items you'd like to
                  incorporate and we will decide the perfect location for your
                  session.
                </p>
                <p>
                  I am so excited to start planning your DREAM photo session!
                  Let's capture your life’s important moments forever. Ready to
                  book? <br /> Click below to schedule your design consultation!
                </p>
              </div>
              <Image
                src="yalda-en-wesley/Yalda%20en%20Wesley-13.jpg"
                alt="luxury details"
              />
            </InnerContainer>

            <ButtonContainer>
              <Button style={{ marginTop: "20px" }} to={"/contact"}>
                Contact Annie
              </Button>
            </ButtonContainer>
          </TextContainer>

          <Information>
            <h1>Investment information</h1>
            <p>Portrait sessions start from 280 Eur </p>
            <p> Weddings start from 1200 Eur</p>
            <p>
              Every image is individually retouched and available for you to
              download with a personal Online Gallery to share with family or
              friends. Our pricing reflects the experience and quality of work
              at an affordable competitive price for Amsterdam Weddings.
            </p>

            <p>
              Regarding the situation we all face due to Covid-19, it is
              possible to build your own wedding package, and only book the
              actual hours needed instead of a full package.
            </p>

            <p>
              For our price guide and other enquiries please send an email to
              mail@anniekostolany.com or fill out the&nbsp;
              <b>
                <NavLink style={{ color: "#A77C74" }} to={"/wedding"}>
                  contact form
                </NavLink>
                .
              </b>
            </p>
          </Information>
          <Gallery style={{ paddingTop: "0" }}>
            <Image
              src="/amsterdam-zandvoort-wedding/amsterdam-wedding-96.jpg"
              alt="beach wedding"
            />
            <Image
              style={{ filter: "brightness(90%)" }}
              src="jordaan-surprise-engagement/jordaan-engagement-26.jpg"
              alt="engangement ring"
            />
            <Image
              src="/tania-and-victor/Tania+Victor%20wedding-121.jpg"
              alt="couple celebrating"
            />
            <Image
              src="/yalda-en-wesley/Yalda%20en%20Wesley-64.jpg"
              alt="wedding couple"
            />
          </Gallery>
        </Container>
        <ButtonContainer style={{ marginBottom: "40px" }}>
          <Button to={"/contact"}>Contact Annie </Button>
          <GoToTopButton
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Go to top{" "}
          </GoToTopButton>
        </ButtonContainer>
      </div>
    );
  }
}

export default Investment;
