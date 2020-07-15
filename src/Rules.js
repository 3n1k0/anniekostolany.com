import React, { useState } from "react";
import { device } from "./mediaquery";
import styled, { createGlobalStyle } from "styled-components/macro";
import { fonts } from "./config";
import { StyledImg } from "./Blog";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Button } from "./Home";

const Container = styled.div`
  width: 720px;
  margin: 0 auto;
  padding: 150px 0px 100px 0px;
  color: #585656;

  h2 {
    font-family: ${fonts.kacskaringos};
    font-size: 60px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
    padding-bottom: 30px;
    font-style: italic;
    color: sienna;
  }

  p {
    font-family: ${fonts.mindenmas};
    font-size: 18px;
    text-align: left;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.005em;
  }

  ul{
    text-align: center;
    padding-top: 50px;
  }
`;

class Rules extends React.Component {
  render() {
    return (
      <div className="PresetShop">
        <Navbar style={{ background: "black" }} />
        <Helmet>
          <title>About Annie</title>
          <meta
            name="description"
            content="About Annie - Amsterdam-based professional photographer"
          />
        </Helmet>
        <Container>
          <p>
            Since first picking up a camera, I have captured so many of life’s
            most important moments via couple portraits to engagements,
            weddings, maternity shoots, children, and many more. <br />
            At the same time, my work has been featured by a number of different
            publishers, including SALYSÉ, and Vogue Italia. <br /> Both facets
            of photography require the same level of respect, discipline and
            understanding, if you are to excel in them. The quality of my work
            ultimately boils down to the knowledge of one key factor:
            photography is the art of storytelling. It’s more than pointing and
            clicking, taking pictures and hoping for the best. It’s about
            constructing an image that encapsulates a moment in time. Using a
            bright, colorful, airy style, my photos are able to capture not just
            the sights, but the sounds, smells, and emotions of a special time
            in your life. In order to ensure that my work will do your life’s
            moments – big and small – justice, I have an array of tailored
            sessions, which will cater to your photographic needs, whatever your
            tastes or targets.{" "}
          </p>
          <br />
          <p>
            If one sounds good to you, or if you have any questions, please feel
            free to reach out to mail@anniekostolany.com or by filling out the
            <NavLink to="/contact">contact form</NavLink>.
            </p>
          <p>
            <ul>
              <li>
                <h2>Step 1</h2> Go to
                <NavLink to="/investment">Investments</NavLink> and pick a
                package you like.
              </li>
              <br />

              <li>
                <h2>Step 2</h2> Shoot me a message to check my availability.
              </li>
              <br />

              <li>
                <h2>Step 3</h2> I will send you an email to confirm the date for
                your shoot and you can simply buy your package through the
                Investments tab. You will also get a contract and a Dutch
                invoice at the time of your booking. If you prefer another
                payment method or would like to discuss a payment plan, just let
                me know and I will do my best to find the right solution for
                you.
              </li>
              <br />

              <li>
                <h2>Step 4</h2> We will discuss your ideas through a Zoom/Skype
                call, and go through your mood board together to talk about your
                expectations.
              </li>
              <br />

              <li>
                <h2>Step 5</h2> Let’s shoot! You can expect your digital photos
                in a couple of weeks, delivered beautifully in a private online
                gallery.
              </li>
            </ul>
          </p>
          <br />

          <NavLink to={"/contact"}>
            <Button> Contact Annie </Button>
          </NavLink>
          <StyledImg style={{paddingTop: "60px" }}
            alt="Annie Kostolany"
            src="https://ucarecdn.com/3c6be24b-afaf-41a0-afd5-b062ea61693d/anniekostolanyaboutmepage1.jpg"
          ></StyledImg>
              <StyledImg style={{paddingTop: "60px" }}
            alt="Annie Kostolany"
            src="https://ucarecdn.com/3c6be24b-afaf-41a0-afd5-b062ea61693d/anniekostolanyaboutmepage1.jpg"
          ></StyledImg>
              <StyledImg style={{paddingTop: "60px" }}
            alt="Annie Kostolany"
            src="https://ucarecdn.com/3c6be24b-afaf-41a0-afd5-b062ea61693d/anniekostolanyaboutmepage1.jpg"
          ></StyledImg>
              <StyledImg style={{paddingTop: "60px" }}
            alt="Annie Kostolany"
            src="https://ucarecdn.com/3c6be24b-afaf-41a0-afd5-b062ea61693d/anniekostolanyaboutmepage1.jpg"
          ></StyledImg>
              <StyledImg style={{paddingTop: "60px" }}
            alt="Annie Kostolany"
            src="https://ucarecdn.com/3c6be24b-afaf-41a0-afd5-b062ea61693d/anniekostolanyaboutmepage1.jpg"
          ></StyledImg>
        </Container>
      </div>
    );
  }
}

export default Rules;
