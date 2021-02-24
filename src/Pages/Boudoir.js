import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import {
  Button,
  ButtonContainer,
  GoToTopButton,
  ReviewContainer,
  DoubleImageContainer,
  StyledButton,
  MainContainer,
} from "../config/Ui";
import Image from "../components/Image";

class Boudoir extends React.Component {
  render() {
    return (
      <div className="Boudoir">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book a professional photographer in Amsterdam</title>
          <meta
            name="description"
            content="Boudoir and escort photography in Amsterdam"
          />
        </Helmet>

        <MainContainer>
          <p>
            The softness of silk, the color of peonies, the touch of lace...
            boudoir photography is about the details that reflect inner beauty
            and confidence. It's all about self-love and acceptance. <br />
            Feel like the empowered, strong and beautiful person you are. <br />
            You are unique and capable.
            <br />
            <b>You are unstoppable.</b>
          </p>

          <Image src="anna-b/Anna-13.jpg" alt="girl with flowers" />

          <p>
            I know what you’re thinking: that you would love to try boudoir
            photography but you’re afraid to be too awkward. Let me tell you
            that most of my clients used to have this fear before we worked
            together. It is normal to be a little nervous or shy. Heck, most
            people freak out to pose in front of the camera all dressed up!{" "}
            <br />
            <br />
            The beauty in boudoir photography is that you will immerse in
            intimacy, then find your voice and a way to express your inner
            beauty through your body language.
            <br /> I will always respect your boundaries in the meantime and
            never ask you to do something that makes you feel uncomfortable.
            <br /> The goal is for you to feel and see the empowered, strong and
            irresistible woman you are.
          </p>

          <DoubleImageContainer>
            <Image
              data-aos="flip-right"
              src="boudoir/bridal-boudoir-6.jpg"
              alt="woman in veil"
            />

            <Image data-aos="flip-left" src="boudoir/6.jpg" />
          </DoubleImageContainer>
          <p>
            My detailed and sophisticated retouch process includes several steps
            to ensure you get the results you seek for. I will make sure that
            you feel 100% confident and comfortable with the images I deliver.
          </p>

          <Image src="boudoir/Anna-20.jpg" alt="girl with flowers" />
          <Image
            src="boudoir/bridal-boudoir-42.jpg"
            alt="lingerie photoshoot"
            loading="lazy"
          />
          <Image
            src="boudoir/4.jpg"
            alt="lingerie fashion photoshoot"
            loading="lazy"
          />

          <Image
            src="boudoir/Anna-5.jpg"
            alt="lingerie fashion photoshoot"
            loading="lazy"
          />
          <Image
            src="boudoir/5.jpg"
            alt="girl looking through glass"
            loading="lazy"
          />
          <Image
            src="boudoir/boudoir10.jpg"
            alt="fashion shoot"
            loading="lazy"
          />
          <p>
            <b>
              Maybe you don't think it's in you, but believe me, give a girl the
              right lighting and she can do anything.
            </b>
          </p>

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
              "A friend and I scheduled a joint boudoir shoot with Annie during
              my visit to Amsterdam, and in addition to having SO MUCH fun that
              afternoon, the photos ended up being more breath-taking than I
              ever could have imagined. Annie was terrific to work with, and
              made us feel comfortable immediately; her cues and tips make
              posing easy, and her sense of what will look incredible on camera
              (even if not intuitive to me) is spot on. I can't stop scrolling
              through my photos. Thank you, Annie! "
              <br />- Kate Z.
            </p>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/anna-b/Anna-19.jpg"
              alt="girl with bouquet"
              loading="lazy"
            ></img>
          </div>
          <StyledButton to={"/reviews"}>What other people say</StyledButton>
        </ReviewContainer>
      </div>
    );
  }
}

export default Boudoir;
