import React from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import { fonts } from "../config";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";
import GlobalStyle from "../globalStyles";
import { Button, CardsContainer, CardInnerContainer, CardTitle } from "../Ui";
import UploadcareImage from "../UploadcareImage";
import { NavLink } from "react-router-dom";


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
  font-family: ${fonts.subtitle};
  text-transform: uppercase;
  color: #29120f;
  font-weight: 200;
  font-size: 19px;
  padding-bottom: 20px;
  margin: 20px 0px;

  h2 {
    border-bottom: 1px solid #4f2b26;
    margin: 10px;
    cursor: pointer;
    font-size: 19px;
    text-transform: uppercase;

    &:hover {
      color: #4f2b80;
    }

    &:visited {
      color: #4f2b26;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(80%);
  }

  div {
    height: 500px;
    min-width: 400px;
    padding: 30px;
    display: flex;
    flex-flow: column-reverse;
    object-fit: cover;
    align-items: center;
    justify-content: center;
  }

  @media ${device.desktop} {
    display: flex;
    flex-flow: row;
    width: 70%;
    margin: 35px;

    div {
      padding: 25px;
      min-width: 400px;
      max-width: 400px;
    }

    h2 {
      padding-top: 20px;
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

export const Textcontainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 500px;
  align-items: center;
  position: absolute;
  top: 30%;
`;

export const Subtitle = styled.div`
  font-family: ${fonts.handwritten};
  font-size: 18px;
  font-style: italic;
  color: rgb(97.2%, 96.9%, 91%);
  text-align: center;
  padding: 20px;
  letter-spacing: 1px;

  @media ${device.desktop} {
    font-size: 24px;
  }
`;

export const MottoContainer = styled.div`
  max-width: 65%;
  text-align: center;
`;

export const Motto = styled.div`
  font-family: ${fonts.subtitle};
  color: white;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-bottom: 20px;
  width: 110%;

  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.desktop} {
    font-size: 2rem;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  position: relative;
  filter: brightness(80%);
  /* object-position: 0% 126%; */

  @media ${device.desktop} {
    height: 1200px;
  }
`;

const CardsContainerReversed = styled(CardsContainer)`
  @media ${device.desktop} {
    flex-flow: row-reverse;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  margin: 50px;

  div {
    padding: 50px;
    width: 80%;
  }

  p {
    padding: 30px 0px;
    font-size: 22px;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    padding: 30px;
    width: 60%;
  }

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;

const IntroImage = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  margin: 50px;

  @media ${device.desktop} {
    width: 400px;
    height: 500px;
  }
  @media ${device.tablet} {
    width: 70%;
    height: auto;
  }
`;

const HandWrittenReview = styled.div`
  font-family: "Playfair Display";
  font-weight: 400;
  font-style: italic;
  line-height: 1.5;
  font-size: 28px;
  color: #3b2713;
`;

const ReviewContainer = styled.div`
  height: 700px;
  background: lightblue;
  width: 100%;
  background-image: url("https://static.llllllllllll.com/eniko/anniekostolany/Yalda%20en%20Wesley-52.jpg");
  background-size: cover;
  background-position: 20% 20%;
  filter:  brightness(85%);
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 40px;
    padding: 50px;
  }

  a {
    font-size: 30px;
    text-decoration: underline;
    color: white;
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
          linkColor="#404040" //#26261C
        />
        <HomeContainer>
          <Container>
            <HeaderImage
              alt="Marriage"
              src="https://static.llllllllllll.com/eniko/anniekostolany/amsterdam-proposal-14.jpg"
              loading="lazy"
            ></HeaderImage>
          </Container>

          <Wrapper>
            <div>
              <h2>
                <NavLink style={{ color: "#4f2b26" }} to={"/couples"}>
                  View gallery
                </NavLink>
              </h2>
              <img src="https://static.llllllllllll.com/eniko/anniekostolany/karen-graham-8.jpg" />
            </div>
            <div>
              <h2>
                <NavLink style={{ color: "#4f2b26" }} to={"/investment"}>
                  See packages
                </NavLink>
              </h2>
              <img src="https://static.llllllllllll.com/eniko/anniekostolany/betsy-25.jpg" />
            </div>
            <div>
              <h2>
                <NavLink style={{ color: "#4f2b26" }} to={"/contact"}>
                  Get in touch
                </NavLink>
              </h2>
              <img src="https://static.llllllllllll.com/eniko/anniekostolany/ayo+ayo-30.jpg" />
            </div>
          </Wrapper>

          <IntroContainer data-aos="zoom-out-up">
            <IntroImage src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/107062536_3550008198363484_5757564740516023325_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=dYGl719yb-cAX9n-scX&_nc_ht=scontent-ams4-1.xx&oh=45a07409c031897b7fec363b52d14d5a&oe=6027FE6B"></IntroImage>
            <div>
              <h2>Welcome!</h2>
              <p>
                Thanks for being here! I’m Annie, an Amsterdam-based
                photographer with over 5 years of experience.
                <br /> <br />I have always sought to create naturally beautiful,
                editorial-feeling images full of soul and connection. My style
                is to combine natural-looking poses with candid in-between
                moments to give you photos that have that timeless, lifestyle
                vibe.
                <br />
                My goal is to put you at ease and make your photoshoot
                experience as stress-free and fun as possible. I try to capture
                not only what is pretty (because I know you want to look good in
                your photos) but also what is real; your love, connection,
                laughter & joy. <br />
                <br />I currently live in Zandvoort with my husband Andor and my
                cat, Pablo. When I’m not shooting weddings, engagements or
                boudoir, I’m probably making funny Instagram stories of them.
              </p>
            </div>
          </IntroContainer>

          <CardsContainer data-aos="flip-left">
            <UploadcareImage
              uuid="28cda8e9-e274-444b-9a60-02cbb1424ae9"
              alt="Mom with child"
            />
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
            <UploadcareImage
              uuid="3d344f8f-377c-4fa5-a8b3-9e3d93a19939"
              alt="Girl with windmill and flowers"
            />
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
          <CardsContainer style={{ borderTop: "1px solid grey" }}>
            <UploadcareImage
              style={{ maxWidth: "500px" }}
              uuid="9d113365-7771-4661-a775-84c46c8d38d6"
              alt="Tulip model fashion shoot"
            />
            <CardInnerContainer data-aos="zoom-out-up">
              <CardTitle>
                <h2>FASHION</h2>
              </CardTitle>
              <Button to={"/fashion"}>See portfolio</Button>
            </CardInnerContainer>
          </CardsContainer>
          <IntroContainer data-aos="zoom-out-up">
            <HandWrittenReview>
              Annie was such a great person to work with! My husband and I
              contacted her for our wedding ceremony for 2 different days and
              she was very professional, helped us so much in making great
              photos. She even cheered us up during our sessions in cold winter
              in Haarlem and Amsterdam, and we had fun! We love the results as
              well, they’re beautiful! Thanks Annie for making our special days
              even more memorable! - Tania
            </HandWrittenReview>
            <IntroImage src="https://static.llllllllllll.com/eniko/anniekostolany/Tania+Victor%20wedding-106.jpg"></IntroImage>
          </IntroContainer>

          <ReviewContainer>
            <h2>See what others say about the experience</h2>
            <NavLink to={"/reviews"}>Read the reviews</NavLink>
          </ReviewContainer>
        </HomeContainer>
      </>
    );
  }
}

export default Home;
