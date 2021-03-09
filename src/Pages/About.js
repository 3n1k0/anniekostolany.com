import React from "react";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { Button, Text } from "../config/Ui";
import GlobalStyle from "../config/globalStyles";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  color: #585656;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  padding-bottom: 50px;
  background: white;
  padding-top: 140px;
  top: 100px;
  height: 100%;

  span {
    background: rgba(170, 134, 140, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    margin: 0 auto;
    padding-bottom: 40px;
    background: white;
  }

  h2 {
    font-size: 40px;
    text-align: left;
    color: rgb(170, 134, 140);
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
        <GlobalStyle />
        <Container>
          <Text>
            <img
              alt="Annie Kostolany professional photographer"
              src={`https://static.llllllllllll.com/eniko/anniekostolany/mix/annie-kostolany.jpg`}
              loading="lazy"
            ></img>
            <h2>Hi! My name is Annie. </h2>
            <p>
              I&rsquo;m a Hungarian wanderlust, who settled in Amsterdam by way
              of Budapest, Trier and Los Angeles. Perhaps the most important
              thing I&rsquo;ve learned since becoming a photographer is that
              without that <span>magical connection</span>, you have nothing. If
              you don&rsquo;t build trust and rapport between the human being
              behind the lens and the one in front of it, you have a picture,
              but not a photograph.&nbsp;
            </p>
            <p>
              With that in mind, I think it&rsquo;s important to tell you a
              little about myself.
            </p>
            <p>
              Before I first picked up a camera, I always struggled to find the
              right words to express myself. That might seem ironic for someone
              who studied Philology and Hungarian Literature, but I always felt
              I needed to <span>communicate in some way</span> beyond writing.
              Eventually this put an end to my brief flirtation with journalism
              too, and while working sales jobs I realized I would have to get
              out of my comfort zone if I was going to find my calling. After
              trying my luck in a number of lines of work &ndash; moving half
              way round the world and back in the process &ndash; it was in
              Amsterdam that <span>I finally found my voice</span>.
            </p>
            <p>
              Over the past three years, I have captured so many of life&rsquo;s
              most important moments, everything from{" "}
              <span>
                couples portraits to engagements, weddings, maternity shoots,
                children, alongside pets, cityscapes{" "}
              </span>{" "}
              and more. My work has even been featured by a number of different
              publishers, including SALYS&Eacute;, and Vogue Italia.
            </p>
            <p>
              Before I took up photography, I felt like I had so much to say,
              but was deprived of a manner to say it. Now, using a camera as a
              tool to express myself, and the vision of my clients, I feel a
              huge relief. I have found what I was looking for all this time,
              and that makes me incredibly happy.
            </p>
            <p>
              Becoming a self-taught photographer can be tricky, but my{" "}
              <span>eye for detail </span> and passion for the art-form gave me
              a hunger to master every aspect of the craft quickly. I can now
              handle anything the photographic process throws at me, connecting
              with my clients to deliver a{" "}
              <span>relationship-based end-to-end service</span>, crafted to
              their needs.
            </p>
            <p>
              If you think that sounds like the right service for you, please
              feel free to send me a message. We can meet for a coffee, or
              discuss your ideas via Skype, phone or email.
            </p>
            <p>
              Now that I&rsquo;ve told you a little about me,{" "}
              <span>I look forward to getting to know you too.</span>
            </p>
          </Text>
          <Button to={"/contact"}>Contact Annie </Button>
        </Container>
      </div>
    );
  }
}

export default About;
