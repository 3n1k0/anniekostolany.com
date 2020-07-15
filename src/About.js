import React, { useState } from "react";
import { device } from "./mediaquery";
import styled, { createGlobalStyle } from "styled-components/macro";
import { fonts } from "./config";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Button, Image, ImageContainer, Text } from "./Home";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 150px 0px 100px 0px;
  color: #585656;

  h2 {
    font-family: ${fonts.kacskaringos};
    font-size: 60px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
    padding: 40px 0px;
    font-style: italic;
    color: rosybrown;
    text-align: center;
  }

  p {
    font-family: ${fonts.mindenmas};
    font-size: 18px;
    text-align: left;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.005em;
  }
`

const ContactButton = styled.div `
  display: flex;
  justify-content: center;
  padding-top: 50px;
`
;
class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Navbar style={{ background: "black" }} />
        <Helmet>
          <title>About Annie</title>
          <meta
            name="description"
            content="About Annie - Amsterdam-based professional photographer"
          />
        </Helmet>
        <Container>
          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/6b826330-9ead-430b-86a7-9b14bfcb9b85/anniekostolanyaboutmepage1webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/2637abab-171e-46b0-8f70-b606894a5c90/anniekostolanyaboutmepage.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Annie Kostolany professional photographer"
                src="https://ucarecdn.com/2637abab-171e-46b0-8f70-b606894a5c90/anniekostolanyaboutmepage.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <Text>
            <h2>hey there</h2>
            <p>
              My name is Annie. I’m a Hungarian wanderlust, who settled in
              Amsterdam by way of Budapest, Trier and Los Angeles. <br />
              Perhaps the most important thing I’ve learned since becoming a
              photographer is that without that magical connection, you have
              nothing. If you don’t build trust and rapport between the human
              being behind the lens and the one in front of it, you have a
              picture, but not a photograph. With that in mind, I think it’s
              important to tell you a little about myself.{" "}
            </p>
            <br />
            <p>
              Before I first picked up a camera, I always struggled to find the
              right words to express myself. That might seem ironic for someone
              who studied Philology and Hungarian Literature, but I always felt
              I needed to communicate in some way beyond writing. <br />{" "}
              Eventually this put an end to my brief flirtation with journalism
              too, and while working sales jobs I realized I would have to get
              out of my comfort zone if I was going to find my calling. After
              trying my luck in a number of lines of work – moving half way
              round the world and back in the process – it was in Amsterdam that
              I finally found my voice.{" "}
            </p>

            <p>
              <br /> Over the past three years, I have captured so many of
              life’s most important moments, everything from couples portraits
              to engagements, weddings, maternity shoots, children, alongside
              pets, cityscapes and more. <br /> My work has even been featured
              by a number of different publishers, including SALYSÉ, and Vogue
              Italia. Before I took up photography, I felt like I had so much to
              say, but was deprived of a manner to say it. Now, using a camera
              as a tool to express myself, and the vision of my clients, I feel
              a huge relief. I have found what I was looking for all this time,
              and that makes me incredibly happy.{" "}
            </p>

            <p>
              <br /> Becoming a self-taught photographer can be tricky, but my
              eye for detail and passion for the art-form gave me a hunger to
              master every aspect of the craft quickly. I can now handle
              anything the photographic process throws at me, connecting with my
              clients to deliver a relationship-based end-to-end service,
              crafted to their needs. <br />
              If you think that sounds like the right service for you, please
              feel free to send me a message.
              <br /> We can meet for a coffee, or discuss your ideas via Skype,
              phone or email.
              <br />
              <br />
              Now that I’ve told you a little about me, I look forward to
              getting to know you too.
            </p>
       
          </Text>
          <ContactButton>
          <NavLink to={"/contact"}>
            <Button> Contact Annie </Button>
          </NavLink>
          </ContactButton>
        </Container>
      </div>
    );
  }
}

export default About;
