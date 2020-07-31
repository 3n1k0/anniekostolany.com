import React from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import { fonts, colors } from "../config";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Reviews from "../Reviews";
import {
  Button,
  Image,
  ImageContainer,
  CardsContainer,
  CardInnerContainer,
  CardTitle,
  Text,
} from "../Ui";

const TextBox = styled.div`
  margin: 50px auto;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  width: 100%;
  font-size: 1.5em;

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
  font-family: ${fonts.focim};
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
  filter: brightness(75%);
`;

const TextboxButton = styled(Button)`
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
            <source
              srcset="https://ucarecdn.com/e742370a-5e45-41f5-a3c4-7ab5ce979a85/header.jpg"
              type="image/jpeg"
              loading="lazy"
            />

            <HeaderImage
              alt="Girl with flowers"
              src="https://ucarecdn.com/e742370a-5e45-41f5-a3c4-7ab5ce979a85/header.jpg"
              loading="lazy"
            ></HeaderImage>
          </picture>

          <Textcontainer>
            <Subtitle>
              <p>Photo sessions in the Netherlands & worldwide</p>
            </Subtitle>
            <MottoContainer>
              <Motto>
                <h1>BE YOUR OWN KIND OF BEAUTIFUL</h1>
              </Motto>
            </MottoContainer>
            <TextboxButton to={"/solo-travelers"}>See portfolio</TextboxButton>
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

        <ImageContainer>
          <picture>
            <source
              srcset="https://ucarecdn.com/83e78393-ce4e-4e52-bf0e-5a88a5244ab6/-/preview/-/format/webp/"
              type="image/webp"
              loading="lazy"
            />

            <Image
              alt="Beach wedding couple"
              src="https://ucarecdn.com/83e78393-ce4e-4e52-bf0e-5a88a5244ab6/-/preview/-/format/auto/"
              loading="lazy"
            />
          </picture>
        </ImageContainer>

        <ImageContainer>
          <picture>
            <source
              srcset="https://ucarecdn.com/e7011a88-163a-43da-b4a5-f2edc506a456/-/preview/-/format/webp/"
              type="image/webp"
              loading="lazy"
            />

            <Image
              alt="Amsterdam girl with bike"
              src="https://ucarecdn.com/e7011a88-163a-43da-b4a5-f2edc506a456/-/preview/-/format/auto/"
              loading="lazy"
            />
          </picture>
        </ImageContainer>

        <ImageContainer>
          <picture>
            <source
              srcset="https://ucarecdn.com/ac9d9011-17ae-4a52-825f-6913f36ee858/-/preview/-/format/webp/"
              type="image/webp"
              loading="lazy"
            />

            <Image
              alt="Windmill engagement couple"
              src="https://ucarecdn.com/ac9d9011-17ae-4a52-825f-6913f36ee858/-/preview/-/format/auto/"
              loading="lazy"
            />
          </picture>
        </ImageContainer>

        <CardsContainer>
          <picture>
            <source
              srcset="https://ucarecdn.com/28cda8e9-e274-444b-9a60-02cbb1424ae9/-/preview/-/format/webp/"
              type="image/webp"
              loading="lazy"
            />

            <Image
              alt="Mom with child"
              src="https://ucarecdn.com/28cda8e9-e274-444b-9a60-02cbb1424ae9/-/preview/-/format/auto/"
              loading="lazy"
            />
          </picture>

          <CardInnerContainer>
            <CardTitle>
              <h2>FOR COUPLES AND FAMILIES</h2>
              <p>
                We all know that time goes by too fast and before we know it,
                the kids are all grown up. Don’t let time pass you by without
                documenting the most important milestones!
              </p>
            </CardTitle>
            <Button to={"/couples"}>More info</Button>
          </CardInnerContainer>
        </CardsContainer>
        <CardsContainerReversed>
          <picture>
            <source
              srcset="https://ucarecdn.com/3d344f8f-377c-4fa5-a8b3-9e3d93a19939/home5.webp"
              type="image/webp"
              loading="lazy"
            />
            <source
              srcset="https://ucarecdn.com/5ced9396-cfdd-47d0-b848-093daa40a9ba/home5.jpg"
              type="image/jpeg"
              loading="lazy"
            />

            <Image
              alt="Girl with windmill and flowers"
              src="https://ucarecdn.com/5ced9396-cfdd-47d0-b848-093daa40a9ba/home5.jpg"
              loading="lazy"
            ></Image>
          </picture>

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
          <picture>
            <source
              srcset="https://ucarecdn.com/377abeca-1940-41a0-84c5-14d759eac7f9/home6.webp"
              type="image/webp"
              loading="lazy"
            />
            <source
              srcset="https://ucarecdn.com/9d113365-7771-4661-a775-84c46c8d38d6/home6.jpg"
              type="image/jpeg"
              loading="lazy"
            />

            <Image
              style={{ width: "500px" }}
              alt="Tulip model fashion shoot"
              src="https://ucarecdn.com/9d113365-7771-4661-a775-84c46c8d38d6/home6.jpg"
              loading="lazy"
            ></Image>
          </picture>

          <CardInnerContainer>
            <CardTitle>
              <h2>FASHION</h2>
              <p>Fashion might change but style is eternal.</p>
            </CardTitle>
            <Button to={"/fashion"}>Fashion work</Button>
          </CardInnerContainer>
        </CardsContainer>
        <Reviews />
      </div>
    );
  }
}

export default Home;
