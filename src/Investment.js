import React from "react";
import { device } from "./mediaquery";
import styled from "styled-components/macro";
import { fonts } from "./config";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { Image, ImageContainer, Text } from "./Home";
import { Quote, ButtonContainer, Szepalcim } from "./Couples";
import { Button } from "./Ui";
import { GoToTopButton } from "./FullPost";

const Sharedbox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;

  @media ${device.desktop} {
    width: 60%;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 150px 0px 0px 0px;
  color: #585656;
  text-align: center;

  p {
    font-family: ${fonts.mindenmas};
    font-size: 1.1em;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.005em;
    max-width: 90%;
    padding-bottom: 20px;

    margin: 0 auto;

    @media ${device.desktop} {
      max-width: 60%;
    }
  }
`;

class Investment extends React.Component {
  render() {
    return (
      <div className="Investment">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book your travelphotographer in Amsterdam</title>
          <meta
            name="description"
            content="Book a professional photographer in Amsterdam"
          />
        </Helmet>

        <Container>
          <Szepalcim>
            {" "}
            The softness of silk, the color of peonies, the touch of lace...
            boudoir photography is about the details that reflect inner beauty
            and confidence. It's all about self-love and acceptance. <br />
            Feel like the empowered, strong and beautiful person you are. <br />
            You are unique and capable.
            <br />
            <b>You are unstoppable.</b>
          </Szepalcim>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/108988b4-88d8-4f77-8113-c1ac7dff994a/boudoir1.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/1be19a9b-516b-4475-9fea-e3bc23a5e088/boudoir1.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Girl posing with flowers"
                src="https://ucarecdn.com/1be19a9b-516b-4475-9fea-e3bc23a5e088/boudoir1.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>


          

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
        </Container>
        <Quote>
          Annie has a great eye for photos. She was very friendly and made me
          feel comfortable in front of the camera. She knows her way around
          Haarlem and many cool photo spots. She turned around my photos really
          quickly and they all turned out great. I would highly recommend this
          experience with Annie, especially if you travel a lot on your own, its
          so nice to have photos of your trip that aren’t selfies!!
          <br /> — Autumn
          <br /> ⭐⭐⭐⭐⭐
        </Quote>

        <Quote>
          I’m so happy I found Annie she is Truly an Amazing Professional
          Photographer and a Great person . Super sweet , funny and very easy
          going . I can’t say enough positive things about her. I love all my
          pictures . She also delivered them very quick, faster than I expected.
          She was amazing and super easy to work with . 100% recommend Most
          definitely 5 stars !!! Couldn’t be happier with the quality of work!
          Best service for the value! HIGHLY RECOMMENDED !!
          <br />- Andreina
          <br /> ⭐⭐⭐⭐⭐
        </Quote>

        <Quote>
          This photo shoot with Annie was a highlight of our trip. She’s so
          incredibly personable and friendly and was really flexible about
          rescheduling when I got a nasty cold in Amsterdam. Getting to know a
          new unexplored city with a someone who knew all the best spots for
          photos and a bit of the history and culture was incredibly fun. My
          fiancé and I don’t just have a whole collection of gorgeous photos,
          but a really, really special memory of the afternoon we spent with
          Annie. She had excellent tips not just about locations for photos, but
          different poses and activities to try that made the whole experience
          really relaxed and so much more fun than I was expecting (as I’ve felt
          kind of awkward in front of the camera in the past). Annie gave us a
          truly unique afternoon and even had recommendations for what to do
          with the rest of our afternoon in Haarlem. I truly cannot recommend
          this experience enough!
          <br /> — Jessica
          <br /> ⭐⭐⭐⭐⭐
        </Quote>
      </div>
    );
  }
}

export default Investment;
