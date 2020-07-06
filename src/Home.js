import React, { useState } from "react";
import { device } from "./mediaquery";
import styled, { createGlobalStyle } from "styled-components/macro";
import { fonts } from "./config";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const TextBox = styled.div`
  margin: 50px auto;
  display: flex;
  flex-flow: column nowrap;
`;

const TextTitle = styled.div`
  margin: 0 auto;
  font-family: ${fonts.kacskaringos};
  font-size: 2.5em;
  padding-bottom: 30px;
`;

const Text = styled.div`
  margin: 0 auto;
  font-family: ${fonts.mindenmas};
  max-width: 900px;
`;

export const ImageContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;
export const Image = styled.img`
  max-width: 900px;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  padding: 100px 0px;
  justify-content: flex-start;
`;

const CardTitle = styled.div`
  text-align: center;
  text-align: center;

  h2 {
    font-family: ${fonts.cimek};
    font-size: 15px;
    color: sienna;
    letter-spacing: 2px;
  }

  p {
    font-family: ${fonts.mindenmas};
    font-size: 18px;
    opacity: 1;
  }
`;

const h2 = styled.div`
  font-family: ${fonts.focim};
  font-size: 1em;
`;

const CardInnerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  line-height: 2;
  padding: 0px 50px;
  width: 50%;
`;

export const Button = styled.button`
  border: 1px solid goldenrod;
  background: transparent;
  color: black;
  height: 42px;
  width: 101px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1em;
  padding: 0;
  margin: 0 auto;
  width: 190px;
  margin-top: 35px;
  cursor: pointer;

  &:hover {
    background: sienna;
    opacity: 0.7;
    color: rgb(237, 239, 242);
    transition: 0.3s;
  } 
`;

const Testimonials = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding-bottom: 50px;

  h2 {
    font-family: ${fonts.kacskaringos};
    font-size: 32px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
  }
`;

const Testimonial = styled.div`
  padding: 20px;
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

const Textcontainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 500px;
  align-items: center;
  position: absolute;
  top: 30%;
`;

const Subtitle = styled.div`
  font-family: ${fonts.kacskaringos};
  font-size: 18px;
  font-style: italic;
  color: white;
  text-align: center;
  padding: 20px;
  letter-spacing: 1px;

  @media ${device.desktop} {
    font-size: 24px;
  }
`;

const MottoContainer = styled.div`
  max-width: 65%;
  text-align: center;
`;

const Motto = styled.div`
  font-family: ${fonts.focim};
  color: white;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 5px;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const HeaderImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 700px;
  filter: brightness(75%);
`;

const TextboxButton = styled.button`
  border: 2px solid white;
  background: transparent;
  color: white;
  height: 49px;
  display: inline-block;
  line-height: 1em;
  letter-spacing: 2px;
  width: 193px;
  margin-top: 20px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.75em;

  &:hover {
    background: white;
    color: black;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
         <Helmet>
        <title>Home</title>
        <meta name="description"  content="Annie Kostolany professional photographer based in the Netherlands"/>
        </Helmet>

        <Navbar style={{ background: "transparent" }} />
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
            <TextboxButton>See portfolio</TextboxButton>
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
              srcset="https://ucarecdn.com/83e78393-ce4e-4e52-bf0e-5a88a5244ab6/home1.webp"
              type="image/webp"
              loading="lazy"
            />
            <source
              srcset="https://ucarecdn.com/e79670e6-26d9-4dc4-8580-6342b4611e13/home1.jpg"
              type="image/jpeg"
              loading="lazy"
            />

            <Image
              alt="Beach wedding couple"
              src="https://ucarecdn.com/e79670e6-26d9-4dc4-8580-6342b4611e13/home1.jpg"
              loading="lazy"
            ></Image>
          </picture>
        </ImageContainer>
        <ImageContainer>
          <picture>
            <source
              srcset="https://ucarecdn.com/e13a2d81-9a15-4812-9c62-9f4e72776172/home2.webp"
              type="image/webp"
              loading="lazy"
            />
            <source
              srcset="https://ucarecdn.com/b286f314-d52c-4b25-8eb4-c943aa97b404/home2.jpg"
              type="image/jpeg"
              loading="lazy"
            />

            <Image
              alt="Amsterdam model bikes and tulips"
              src="https://ucarecdn.com/b286f314-d52c-4b25-8eb4-c943aa97b404/home2.jpg"
              loading="lazy"
            ></Image>
          </picture>
        </ImageContainer>
        <ImageContainer>
          <picture>
            <source
              srcset="https://ucarecdn.com/ac9d9011-17ae-4a52-825f-6913f36ee858/home3.webp"
              type="image/webp"
              loading="lazy"
            />
            <source
              srcset="https://ucarecdn.com/1e54e891-9704-4660-9b36-95389633c2b7/home3.jpg"
              type="image/jpeg"
              loading="lazy"
            />

            <Image
              alt="Windmill engagement couple"
              src="https://ucarecdn.com/1e54e891-9704-4660-9b36-95389633c2b7/home3.jpg"
              loading="lazy"
            ></Image>
          </picture>
        </ImageContainer>
        <CardsContainer>
          <picture>
            <source
              srcset="https://ucarecdn.com/28cda8e9-e274-444b-9a60-02cbb1424ae9/home4.webp"
              type="image/webp"
              loading="lazy"
            />
            <source
              srcset="https://ucarecdn.com/36afc3be-e95c-408e-bcfd-7d56295bb21d/home4.jpg"
              type="image/jpeg"
              loading="lazy"
            />

            <Image
              style={{ width: "500px" }}
              alt="Mom with child"
              src="https://ucarecdn.com/36afc3be-e95c-408e-bcfd-7d56295bb21d/home4.jpg"
              loading="lazy"
            ></Image>
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
            <NavLink to={"/couples"}>
              <Button> More info</Button>
            </NavLink>
          </CardInnerContainer>
        </CardsContainer>
        <CardsContainer style={{ flexFlow: "row-reverse" }}>
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
              style={{ width: "500px" }}
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
            <NavLink to={"/travelers"}>
              <Button> Details</Button>
            </NavLink>
          </CardInnerContainer>
        </CardsContainer>
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
            <NavLink to={"/fashion"}>
              <Button> Fashion work</Button>
            </NavLink>
          </CardInnerContainer>
        </CardsContainer>
        <Testimonials>
          <h2>Testimonials</h2>
          <Testimonial>
            A friend and I scheduled a joint boudoir shoot with Annie during my
            visit to Amsterdam, and in addition to having SO MUCH fun that
            afternoon, the photos ended up being more breath-taking than I ever
            could have imagined. Annie was terrific to work with, and made us
            feel comfortable immediately; her cues and tips make posing easy,
            and her sense of what will look incredible on camera (even if not
            intuitive to me) is spot on. I can't stop scrolling through my
            photos. Thank you, Annie! — Kate Z.
          </Testimonial>

          <Testimonial>
            I worked with Annie two times and both are amazing experiences. Most
            of beautiful pictures on my instagram is her worked. I dont have
            sense/idea of how to make good pictures, but i want to have one for
            my social media. luckily she have the best taste in taking
            pictures... always love to shoot with her and never disappoint with
            the result. I will book her again definitely for the fall shoot! —
            Anna B.
          </Testimonial>

          <Testimonial>
            Annie is such a great person to work with. She really listens to
            what you want, gives tips and makes you feel very relaxed. Thinking
            'bout doing another session with her already!! — Agatha C.
          </Testimonial>

          <Testimonial>
            Yesterday we had an engagement photoshoot with Annie. Annie
            recommended us a great place, Zaanse Schans. We have never been in a
            photoshoot before, but Annie made the whole session really easy and
            fun. She helped us with the poses and her great personality made the
            photoshoot even better. Cannot wait to see the photos!! Highly
            recommended for every couple!!❤️ — Dora N.
          </Testimonial>

          <Testimonial>
            The way Annie works is authentic and simple yet so effective. The
            whole day was a vibe. When I first saw my photos I was GOBSMACKED!!
            I enjoyed every minute of the shoot and would do it again 10x over.
            Thank you Annie for a beautiful experience ❤️ — Amanda C.
          </Testimonial>
        </Testimonials>
        );
      </div>
    );
  }
}

export default Home;
