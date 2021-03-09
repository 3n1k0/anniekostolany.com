import React from "react";
import { device } from "../config/mediaquery";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import GlobalStyle from "../config/globalStyles";
import {
  Button,
  CardsContainer,
  CardInnerContainer,
  CardTitle,
  ReviewContainer,
  IntroContainer,
  CardsContainerReversed,
  StyledButton,
} from "../config/Ui";
import { NavLink } from "react-router-dom";
import Image from "../components/Image";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 19px;

  h2 {
    border-bottom: 1px solid rgb(133, 82, 89);
    color: rgb(133, 82, 89);
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    padding-top: 15px;

    &:visited {
      color: #620903;
    }

    &:hover {
      color: #620950;
    }
  }

  img {
    max-height: 500px;
    min-height: 500px;
    width: 80%;
    object-fit: cover;

    filter: brightness(95%);

    &:hover {
      filter: brightness(80%);
    }
  }

  div {
    display: flex;
    flex-flow: column-reverse;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  @media ${device.desktop} {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      max-height: 500px;
      min-height: 500px;
      min-width: 400px;
      max-width: 400px;
      filter: brightness(95%);

      &:hover {
        filter: brightness(80%);
      }
    }
    flex-flow: row;

    div {
      padding: 20px;
    }
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 15px;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 1200px;
  object-fit: cover;
  object-position: 57% 0%;
  position: relative;

  @media ${device.desktop} {
    object-position: 0% 69%;
    height: 1200px;
  }
`;

const WideContainer = styled.div`
  height: 800px;
  background: lightblue;
  width: 100%;
  background-image: url("https://static.llllllllllll.com/eniko/anniekostolany/yalda-en-wesley/Yalda%20en%20Wesley-52.jpg");
  background-size: cover;
  background-position: 20% 30%;
  filter: brightness(98%);
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  i {
    animation: pulse 2s infinite;
    font-size: 40px;
  }

  @keyframes pulse {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  h2 {
    font-size: 35px;
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    text-shadow: 0 0 10px rgb(0 0 0 / 50%);
    font-weight: 900;
    letter-spacing: 5px;

    @media ${device.desktop} {
      font-size: 50px;
    }
  }

  a {
    font-size: 18px;
    color: #ffff;
    text-shadow: 0 0 10px rgb(0 0 0 / 50%);
    text-transform: lowercase;
    border: 1px solid #fff;
    width: max-content;
    padding: 12px 25px;
    font-weight: bold;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    @media ${device.desktop} {
      font-size: 26px;
    }
  }
`;

class Home extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="Annie Kostolany professional photographer based in the Netherlands"
          />
        </Helmet>

        <GlobalStyle />
        <Navbar
          style={{ background: "transparent" }}
          dropDowncolor="rgb(248,248,255, 0.3)"
          linkColor="#404040"
        />

        <HomeContainer>
          <Container>
            <HeaderImage
              alt="Couple on boat"
              src="https://static.llllllllllll.com/eniko/anniekostolany/annie-kostolany-header-1%20copy.jpg"
              loading="lazy"
            ></HeaderImage>
          </Container>

          <Wrapper>
            <NavLink style={{ color: "#4f2b26" }} to={"/couples"}>
              <div>
                <h2>View gallery</h2>
                <Image
                  src="karen-graham/karen-graham-8.jpg"
                  alt="couple smiling"
                ></Image>
              </div>
            </NavLink>

            <NavLink style={{ color: "#4f2b26" }} to={"/investment"}>
              <div>
                <h2>See packages</h2>
                <Image src="betsy/betsy-25.jpg" alt="girl with flowers"></Image>
              </div>
            </NavLink>
            <NavLink style={{ color: "#4f2b26" }} to={"/contact"}>
              <div>
                <h2>Get in touch</h2>
                <Image
                  src="ayo+ayo/ayo+ayo-30.jpg"
                  alt="couple kissing"
                ></Image>
              </div>
            </NavLink>
          </Wrapper>

          <IntroContainer>
            <Image src="mix/annie-kostolany.jpg" alt="annie"></Image>
            <div>
              <h2>Welcome!</h2>
              <p>
                Thanks for being here! I’m Annie, an Amsterdam-based
                photographer with over 5 years of experience.
                <br />
                My goal is to put you at ease and make your photoshoot
                experience as <span>stress-free and fun</span> as possible.
                <br />
                <br />I try to capture <span>not only what is pretty</span>{" "}
                (because I know you want to look good in your photos) but also
                what is <span>real</span>; your love, connection, laughter &
                joy.
                <br /> <br />I have always sought to create{" "}
                <span>naturally beautiful, editorial-feeling images</span> full
                of soul and connection.
                <br />
                My style is to combine natural-looking poses with candid
                in-between moments to give you photos that have that{" "}
                <span>timeless, lifestyle vibe</span>.
                <br />
              </p>
            </div>
          </IntroContainer>

          <WideContainer>
            <h2>Let's go on an adventure together!</h2>
            <NavLink to={"/wedding"}>Information for brides</NavLink>
            <i class="chevron bottom" class="fas fa-angle-double-up"></i>
          </WideContainer>

          <CardsContainer data-aos="flip-left">
            <Image
              src="mix/amsterdam-family-shoot-3.jpg"
              alt="family amsterdam"
            ></Image>
            <CardInnerContainer>
              <CardTitle>
                <h2>FOR FAMILIES</h2>
                <p>
                  We all know that time goes by too fast and before we know it,
                  the kids are all grown up. Don’t let time pass you by without
                  documenting the most important milestones!
                </p>
              </CardTitle>
              <Button
                to={"/couples"}
                aria-label="This is a portfolio collection of couple photos"
              >
                See photos
              </Button>
            </CardInnerContainer>
          </CardsContainer>
          <CardsContainerReversed data-aos="flip-right">
            <Image src="mix/DSC_3097.jpg" alt="Girl with windmill"></Image>
            <CardInnerContainer>
              <CardTitle>
                <h2>FOR TRAVELERS</h2>
                <p>
                  Whether you’re looking for travel photos, elegant portraits or
                  something else, my jewel-toned, true to life coloured
                  photography style will ensure you remember your Dutch
                  adventure for years to come, with the perfect set of pictures.
                </p>
              </CardTitle>
              <Button to={"/couples"}>Details</Button>
            </CardInnerContainer>
          </CardsContainerReversed>
          <ReviewContainer>
            <div>
              <p>
                "Annie was such a great person to work with! <br />
                My husband and I contacted her for our wedding ceremony for two
                different days and she was very professional, helped us so much
                in making great photos. She even cheered us up during our
                sessions in cold winter in Haarlem and Amsterdam, and we had
                fun!
                <br />
                We love the results as well, they’re beautiful!
                <br />
                Thanks Annie for making our special days even more memorable!"
                <br />- Tania
              </p>
              <Image
                src="tania-and-victor/Tania+Victor%20wedding-106.jpg"
                alt="couple dancing in street"
              ></Image>
            </div>
            <StyledButton to={"/reviews"}>What other people say</StyledButton>
          </ReviewContainer>
        </HomeContainer>
      </>
    );
  }
}

export default Home;
