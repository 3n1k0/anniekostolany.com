import React from "react";
import { device } from "../config/mediaquery";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Button, ButtonContainer, GoToTopButton } from "../config/Ui";

export const Video = styled.iframe`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const VideoBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 56.25%;
  margin: 55px 0px 100px 0px;
`;
const Line = styled.hr`
  width: 100%;
  border-top: 1px yellow;
  margin: 20px 0px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  align-items: center;
  padding: 150px 0px 100px 0px;
  color: #585656;

  @media ${device.desktop} {
    width: 90%;
  }

  h2 {
    font-size: 30px;
    letter-spacing: 1px;
    text-transform: none;
    font-weight: 100;
    padding-right: 50px;
    width: 200px;
  }

  p {
    width: 90%;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.005em;

    @media ${device.dekstop} {
      width: 70%;
      font-size: 18px;
    }
  }

  div {
    padding-top: 30px;
    width: 90%;

    @media ${device.desktop} {
      width: 70%;
    }
  }
`;

const Step = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

class Rules extends React.Component {
  render() {
    return (
      <div className="HowtoBook">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>About Annie</title>
          <meta
            name="description"
            content="About Annie - Amsterdam-based professional photographer"
          />
        </Helmet>

        <Container>
          <p>
            I'd love to learn more about you and your story. Fill out the
            <NavLink style={{ color: "darkred" }} to="/contact">
              {" "}
              contact form{" "}
            </NavLink>
            and I'll be in touch ASAP.
          </p>

          <div>
            <Step>
              <h2>Step 1</h2>
              <p>
                Start dreaming about your shoot/wedding day. Think about the
                type of the location and the details. Look at Pinterest for
                inspiration and try to create a mood board that captures the
                feeling and idea you have in mind. Don't just pin the photos you
                like. Save hairstyles, makeup, color inspiration, the whole mood
                of what you'd like to capture.
              </p>
            </Step>
            <Line />

            <Step>
              <h2>Step 2</h2>
              <p>
                Time to get in touch! Send me a link to your mood board and I
                will set you up for a call where we discuss details like exact
                time and location.
              </p>
            </Step>
            <Line />

            <Step>
              <h2>Step 3</h2>
              <p>
                After our call I will send you a confirmation email for the
                shoot. This email will contain the payment information and our
                photography agreement. It is possible to set up a flexible
                payment plan for your photoshoots so please do not hesitate to
                get in touch and ask about it!
              </p>
            </Step>
            <Line />

            <Step>
              <h2>Step 4</h2>
              <p>
                Let’s shoot! You can expect your digital photos in a couple of
                weeks, delivered beautifully in a private online gallery.
              </p>
            </Step>
            <Line/>

            <Step>
              <h2>Step 5</h2>
              <p>
                I maintain a very good relationship with most of my past
                clients. Many of them became my friends. Caring about people
                while guiding them though the shoot is an important part of the
                process. This is not just a photoshoot, it's a full experience
                that you will not forget.
                Excited to hear more? Let's chat!
              </p>
            </Step>
          </div>

          <VideoBox>
            <Video
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q9DR0DHwmE0?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></Video>
          </VideoBox>

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
      </div>
    );
  }
}

export default Rules;
