import React from "react";
import styled from "styled-components/macro";
import { fonts } from "../config";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";
import { Button, ButtonContainer, GoToTopButton, Image, ImageContainer, Text } from '../Ui'


const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  color: #585656;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-bottom: 50px;

  h2 {
    font-family: ${fonts.kacskaringos};
    font-size: 60px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
    padding-bottom: 30px;
    font-style: italic;
    text-align: center;
  }

  p {
    font-family: ${fonts.mindenmas};
    font-size: 18px;
    text-align: left;
    text-justify: inter-word;
    font-size: 1em;
    line-height: 1.5;
    letter-spacing: 0.005em;
    padding: 13.5px 0px;
  }
`;

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>About Annie</title>
          <meta
            name="description"
            content="About Annie - Amsterdam-based professional photographer"
          />
        </Helmet>
        <Container>
          <h2>hey there!</h2>
          <ImageContainer style={{ paddingBottom: "40px", marginTop: "40px" }}>
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
            <p>
              My name is Annie. I&rsquo;m a Hungarian wanderlust, who settled in
              Amsterdam by way of Budapest, Trier and Los Angeles.
              <br />
              Perhaps the most important thing I&rsquo;ve learned since becoming
              a photographer is that without that magical connection, you have
              nothing. If you don&rsquo;t build trust and rapport between the
              human being behind the lens and the one in front of it, you have a
              picture, but not a photograph.&nbsp;
            </p>
            <p>
              With that in mind, I think it&rsquo;s important to tell you a
              little about myself.
            </p>
            <p>
              Before I first picked up a camera, I always struggled to find the
              right words to express myself. That might seem ironic for someone
              who studied Philology and Hungarian Literature, but I always felt
              I needed to communicate in some way beyond writing.
              <br />
              Eventually this put an end to my brief flirtation with journalism
              too, and while working sales jobs I realized I would have to get
              out of my comfort zone if I was going to find my calling. After
              trying my luck in a number of lines of work &ndash; moving half
              way round the world and back in the process &ndash; it was in
              Amsterdam that I finally found my voice.
            </p>
            <p>
              Over the past three years, I have captured so many of life&rsquo;s
              most important moments, everything from couples portraits to
              engagements, weddings, maternity shoots, children, alongside pets,
              cityscapes and more. My work has even been featured by a number of
              different publishers, including SALYS&Eacute;, and Vogue Italia.
            </p>
            <p>
              Before I took up photography, I felt like I had so much to say,
              but was deprived of a manner to say it. Now, using a camera as a
              tool to express myself, and the vision of my clients, I feel a
              huge relief. I have found what I was looking for all this time,
              and that makes me incredibly happy.
            </p>
            <p>
              Becoming a self-taught photographer can be tricky, but my eye for
              detail and passion for the art-form gave me a hunger to master
              every aspect of the craft quickly. I can now handle anything the
              photographic process throws at me, connecting with my clients to
              deliver a relationship-based end-to-end service, crafted to their
              needs.
            </p>
            <p>
              If you think that sounds like the right service for you, please
              feel free to send me a message. We can meet for a coffee, or
              discuss your ideas via Skype, phone or email.
            </p>
            <p>
              Now that I&rsquo;ve told you a little about me, I look forward to
              getting to know you too.
            </p>
          </Text>


        </Container>
          
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

      </div>
      
    );
  }
}

export default About;
