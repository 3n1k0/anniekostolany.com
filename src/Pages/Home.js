import React from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import { fonts, colors } from "../config";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";
import Reviews from "../Reviews";
import { UpArrow } from "../UpArrow";
import GlobalStyle from "../globalStyles";
import {
  Button,
  CardsContainer,
  CardInnerContainer,
  CardTitle,
  Text,
} from "../Ui";
import UploadcareImage from "../UploadcareImage";

const TextBox = styled.div`
  justify-content: center;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  width: 100%;
  font-size: 1.5em;
  background: white;
  z-index: 50;
  height: 220px;
  position: relative;
`;

const TextTitle = styled.div`
  font-family: ${fonts.kacskaringos};
  font-size: 1.5em;
  padding-bottom: 30px;
  color: ${colors.footerfekete};
  width: 90%;
  margin: 0 auto;

  @media ${device.desktop} {
    font-size: 2em;
  }
`;

const Container = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
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
  font-family: ${fonts.kacskaringos};
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
  font-family: ${fonts.mindenmas};
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
  object-fit: cover;
  height: 700px;
  position: relative;
  filter: brightness(70%);
`;

const TextboxButton = styled(Button)`
  position: relative;
  background: transparent;
  border: 2px solid white;
  padding: 20px 10px;
  color: white;
  font-size: 14px;
  letter-spacing: 2px;
  transition: 0.6s;

  &:hover {
    background: white;
    color: black;
  }
`;

const CardsContainerReversed = styled(CardsContainer)`
  @media ${device.desktop} {
    flex-flow: row-reverse;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
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
          linkColor="black"
        />

        <Container>
          <picture>
            <source
              srcset="https://ucarecdn.com/60dfdd67-df68-4276-ba1b-b74ce42dc5bb/header.webp"
              type="image/webp"
              loading="lazy"
            />

            <HeaderImage
              alt="Girl with flowers"
              src="https://ucarecdn.com/e742370a-5e45-41f5-a3c4-7ab5ce979a85/header.jpg"
              loading="lazy"
            ></HeaderImage>
          </picture>

          <Textcontainer>
            <Subtitle data-aos="fade-down">
              <p>Photo sessions in the Netherlands & worldwide</p>
            </Subtitle>
            <MottoContainer>
              <Motto data-aos="fade-up">
                <h1>BE YOUR OWN KIND OF BEAUTIFUL</h1>
              </Motto>
            </MottoContainer>
            <TextboxButton
              to={"/solo-travelers"}
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              See portfolio
            </TextboxButton>
          </Textcontainer>
        </Container>
        <TextBox>
          <TextTitle>
            <p>Let’s create magic!</p>
          </TextTitle>
          <Text>
            <p>
              Annie Kostolany is a portrait and lifestyle photographer, based in
              the Netherlands, and available worldwide. Her signature style
              combines magazine portraiture with a soft and dreamy touch.
            </p>
          </Text>
        </TextBox>

        <UploadcareImage
          uuid="83e78393-ce4e-4e52-bf0e-5a88a5244ab6"
          alt="Beach wedding couple"
        />

        <UploadcareImage
          uuid="e7011a88-163a-43da-b4a5-f2edc506a456"
          alt="Amsterdam girl with bike"
        />

        <UploadcareImage
          uuid="ac9d9011-17ae-4a52-825f-6913f36ee858"
          alt="Windmill engagement couple"
        />

        <CardsContainer data-aos="flip-left">
          <UploadcareImage
            uuid="28cda8e9-e274-444b-9a60-02cbb1424ae9"
            alt="Mom with child"
          />
          <CardInnerContainer>
            <CardTitle>
              <h2>FOR COUPLES AND FAMILIES</h2>
              <p>
                We all know that time goes by too fast and before we know it,
                the kids are all grown up. Don’t let time pass you by without
                documenting the most important milestones!
              </p>
            </CardTitle>
            <Button
              to={"/couples"}
              aria-label="This is a portfolio collection for couple photos"
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
                photography style will ensure you remember your Dutch adventure
                for years to come, with the perfect set of pictures.
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
              <p>Fashion might change but style is eternal.</p>
            </CardTitle>
            <Button to={"/fashion"}>Fashion work</Button>
          </CardInnerContainer>
        </CardsContainer>
        <UpArrow />
        <Reviews />
      </div>
    );
  }
}

export default Home;
