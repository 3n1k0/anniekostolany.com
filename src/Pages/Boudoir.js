import React from "react";
import { device } from "../config/mediaquery";
import styled from "styled-components/macro";
import { fonts } from "../config/config";
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

          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/anna-b/Anna-16.jpg"
            alt="girl with flowers"
          />

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
            <img
              data-aos="flip-right"
              src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/bridal-boudoir-6.jpg"
              alt="woman in veil"
            />

            <img
              data-aos="flip-left"
              src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/6.jpg"
            />
          </DoubleImageContainer>
          <p>
            My detailed and sophisticated retouch process includes several steps
            to ensure you get the results you seek for. I will make sure that
            you feel 100% confident and comfortable with the images I deliver.
          </p>

          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/Anna-20.jpg"
            alt="girl with flowers"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/bridal-boudoir-42.jpg"
            alt="lingerie photoshoot"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/4.jpg"
            alt="lingerie fashion photoshoot"
            loading="lazy"
          />

          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/Anna-5.jpg"
            alt="lingerie fashion photoshoot"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/5.jpg"
            alt="girl looking through glass"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/boudoir10.jpg"
            alt="fashion shoot"
            loading="lazy"
          />
          <img
            src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/Anna-13.jpg"
            alt="girl by the window"
            loading="lazy"
          />
          <p>
            <b>
              MAYBE YOU DON’T THINK IT’S IN YOU, BUT BELIEVE ME, GIVE A GIRL THE
              RIGHT LIGHTING AND SHE CAN DO ANYTHING.
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
              "Annie is wonderful to work with! We’re not camera-natural but
              Annie really made us at ease. The photos turned out so well even
              at a time when natural light was fading away. There was nothing
              artificial or posed about the photos, they captured our moments.
              Planning around the time of the shoot and our communication were
              also easy. We received our photos earlier than expected. We would
              recommend this experience to everyone! Once again – thank you
              Annie!!"
              <br />- Karen
            </p>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/sofie-1.jpg"
              alt="bridal boudoir"
              loading="lazy"
            />
          </div>
          <StyledButton to={"/reviews"}>What other people say</StyledButton>
        </ReviewContainer>
      </div>
    );
  }
}

export default Boudoir;
