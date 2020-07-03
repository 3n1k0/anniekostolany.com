import React, { useState } from "react";
import { device } from "./mediaquery";
import styled, { createGlobalStyle } from "styled-components/macro";
import { fonts } from "./config";
import { StyledImg } from "./Blog";
import Navbar from "./Navbar";

const Container = styled.div`
  width: 956px;
  margin: 0 auto;
  padding: 150px 0px 100px 0px;
  color: #585656;

  h2 {
    font-family: ${fonts.kacskaringos};
    font-size: 32px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
    padding-bottom: 30px;
  }

  p {
    font-family: ${fonts.mindenmas};
    font-size: 18px;
    text-align: left;
  }
`;

class About extends React.Component {
  render() {
    return (
      <div className="PresetShop">
        <Navbar style={{ background: "black" }} />

        <Container>
          <StyledImg alt = "Annie Kostolany" src="https://ucarecdn.com/3c6be24b-afaf-41a0-afd5-b062ea61693d/anniekostolanyaboutmepage1.jpg"></StyledImg>

          <h2>hey there</h2>
          <p>
            My name is Annie. I’m a Hungarian wanderlust, who settled in
            Amsterdam by way of Budapest, Trier and Los Angeles. Perhaps the
            most important thing I’ve learned since becoming a photographer is
            that without that magical connection, you have nothing. If you don’t
            build trust and rapport between the human being behind the lens and
            the one in front of it, you have a picture, but not a photograph.
            With that in mind, I think it’s important to tell you a little about
            myself. Before I first picked up a camera, I always struggled to
            find the right words to express myself. That might seem ironic for
            someone who studied Philology and Hungarian Literature, but I always
            felt I needed to communicate in some way beyond writing. Eventually
            this put an end to my brief flirtation with journalism too, and
            while working sales jobs I realized I would have to get out of my
            comfort zone if I was going to find my calling. After trying my luck
            in a number of lines of work – moving half way round the world and
            back in the process – it was in Amsterdam that I finally found my
            voice. Over the past three years, I have captured so many of life’s
            most important moments, everything from couples portraits to
            engagements, weddings, maternity shoots, children, alongside pets,
            cityscapes and more. My work has even been featured by a number of
            different publishers, including SALYSÉ, and Vogue Italia. Before I
            took up photography, I felt like I had so much to say, but was
            deprived of a manner to say it. Now, using a camera as a tool to
            express myself, and the vision of my clients, I feel a huge relief.
            I have found what I was looking for all this time, and that makes me
            incredibly happy. Becoming a self-taught photographer can be tricky,
            but my eye for detail and passion for the art-form gave me a hunger
            to master every aspect of the craft quickly. I can now handle
            anything the photographic process throws at me, connecting with my
            clients to deliver a relationship-based end-to-end service, crafted
            to their needs. If you think that sounds like the right service for
            you, please feel free to send me a message. We can meet for a
            coffee, or discuss your ideas via Skype, phone or email. Now that
            I’ve told you a little about me, I look forward to getting to know
            you too.
          </p>
        </Container>
      </div>
    );
  }
}

export default About;
