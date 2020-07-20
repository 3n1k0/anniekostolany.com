import React from "react";
import { device } from "./mediaquery";
import styled from "styled-components/macro";
import { fonts, colors } from "./config";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Button } from "./Ui";
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

const BookingSteps = styled.div`
  padding-top: 30px;
  width: 90%;

  @media ${device.desktop} {
    width: 70%;
  }
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
    font-family: ${fonts.kacskaringos};
    color: ${colors.mindenmas};
    font-size: 30px;
    letter-spacing: 1px;
    text-transform: none;
    font-weight: 900;

    font-style: italic;
    color: ${colors.mindenmas};
    padding-right: 50px;
    width: 200px;
  }
`;

const Text = styled.div`
  width: 90%;
  font-family: ${fonts.mindenmas};
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.005em;

  @media ${device.dekstop} {
    width: 70%;
    font-size: 18px;
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
        <Navbar style={{ background: "black" }} />
        <Helmet>
          <title>About Annie</title>
          <meta
            name="description"
            content="About Annie - Amsterdam-based professional photographer"
          />
        </Helmet>

        <Container>
          <Text>
            Since first picking up a camera, I have captured so many of life’s
            most important moments via couple portraits to engagements,
            weddings, maternity shoots, children, and many more. <br />
            At the same time, my work has been featured by a number of different
            publishers, including SALYSÉ, and Vogue Italia. <br /> <br /> Both
            facets of photography require the same level of respect, discipline
            and understanding, if you are to excel in them.
            <br /> The quality of my work ultimately boils down to the knowledge
            of one key factor: photography is the art of storytelling. <br />{" "}
            It’s more than pointing and clicking, taking pictures and hoping for
            the best. It’s about constructing an image that encapsulates a
            moment in time. <br /> <br /> Using a bright, colorful, airy style,
            my photos are able to capture not just the sights, but the sounds,
            smells, and emotions of a special time in your life. <br />
            In order to ensure that my work will do your life’s moments – big
            and small – justice, I have an array of tailored sessions, which
            will cater to your photographic needs, whatever your tastes or
            targets.
            <br /> <br />
            If one sounds good to you, or if you have any questions, please feel
            free to reach out to <i>mail@anniekostolany.com</i> or by filling
            out the
            <NavLink to="/contact"> contact form</NavLink>.
          </Text>

          <BookingSteps>
            <Step>
              <h2>Step 1</h2>
              <Text>
                Go to
                <NavLink to="/investment"> Investments</NavLink> and pick a
                package you like.
              </Text>
            </Step>
            <Line />

            <Step>
              <h2>Step 2</h2>
              <Text>Send me a message to check my availability.</Text>
            </Step>
            <Line />

            <Step>
              <h2>Step 3</h2>
              <Text>
                I will send you an email to confirm the date for your shoot and
                you can simply buy your package through the Investments tab. You
                will also get a contract and a Dutch invoice at the time of your
                booking.
                <br /> If you prefer another payment method or would like to
                discuss a payment plan, just let me know and I will do my best
                to find the right solution for you.
              </Text>
            </Step>
            <Line />

            <Step>
              <h2>Step 4</h2>
              <Text>
                We will discuss your ideas through a Zoom/Skype call, and go
                through your mood board together to talk about your
                expectations.
              </Text>
            </Step>
            <Line />

            <Step>
              <h2>Step 5</h2>
              <Text>
                Let’s shoot! You can expect your digital photos in a couple of
                weeks, delivered beautifully in a private online gallery.
              </Text>
            </Step>
          </BookingSteps>

          <NavLink to={"/contact"}>
            <Button> Contact Annie </Button>
          </NavLink>

          <VideoBox>
            <Video
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q9DR0DHwmE0?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></Video>
          </VideoBox>
        </Container>
      </div>
    );
  }
}

export default Rules;
