import React from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import { fonts } from "../config";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";
import {
  Button,
  ButtonContainer,
  GoToTopButton,
  Image,
  ImageContainer,
  CardsContainer,
  CardInnerContainer,
  Text,
} from "../Ui";
import Reviews from '../Reviews';

const Sharedbox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;

  @media ${device.desktop} {
    width: 60%;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 150px 0px 0px 0px;
  color: #585656;
  text-align: center;

  p {
    font-family: ${fonts.mindenmas};
    font-size: 1.1em;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.005em;
    max-width: 90%;
    padding-bottom: 20px;

    margin: 0 auto;

    @media ${device.desktop} {
      max-width: 60%;
    }
  }
`;

class Travelers extends React.Component {
  render() {
    return (
      <div className="Travelers">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book your travelphotographer in Amsterdam</title>
          <meta
            name="description"
            content="Travel photography - Amsterdam-based professional photographer"
          />
        </Helmet>

        <Container>
          <p>
            When people think of the Netherlands, their imaginations are often
            limited to a few clichés: wooden clogs, windmills, bicycles… you get
            the picture. <br /><br />  When visiting, it’s important to remember that
            size isn’t everything, and despite being a small country
            geographically, the Netherlands is packed with world famous icons.{" "}
            <br /><br /> 
            The fact is that Amsterdam’s web of canals, the stunning works of
            Old Masters, unique Delft Blue earthenware, and tulip fields
            stretching as far as the eye can see are just the tip of the
            iceberg.
          </p>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/ede82bee-a352-45ab-9391-e774b5ae1ee8/travelers1.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/00c770e4-5184-44cb-8ebd-ed38c1d88bdb/travelers1.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Girl in front of windmill"
                src="https://ucarecdn.com/00c770e4-5184-44cb-8ebd-ed38c1d88bdb/travelers1.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <Sharedbox>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/ec4817c3-e282-4918-ae29-2d4fefdc912f/travelers3.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/87c8c464-2cd1-4e51-8cfa-3ab19b9bfb7b/travelers3.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Girl sitting in restaurant"
                  src="https://ucarecdn.com/87c8c464-2cd1-4e51-8cfa-3ab19b9bfb7b/travelers3.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
  
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/95112e31-f154-4c77-b049-f3fad519adb7/travelers4.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/2264541d-e2c2-4a8c-8dcd-64fe8c9c3ed2/travelers4.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Girl laughing among flowers"
                  src="https://ucarecdn.com/2264541d-e2c2-4a8c-8dcd-64fe8c9c3ed2/travelers4.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
          </Sharedbox>
          <p>
              Whether you’re looking to explore the hidden beauty spots of
              Amsterdam, or you’re keen to get to know the nearby gem of
              Haarlem, I can show you a world of fantastical imagery you might
              otherwise have missed, as your guide and photographer.
              <br />
            </p>

          <Sharedbox>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/916d6ec3-f827-42c5-bb6c-300e02823035/travelers6.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/e33277c6-5250-4161-a429-ba94f7b94453/travelers6.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Girl playing piano in city center"
                  src="https://ucarecdn.com/e33277c6-5250-4161-a429-ba94f7b94453/travelers6.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>


            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/29537621-3cb8-4d9e-80d7-6251c79dce9c/travelers7.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/692edf8d-4e7d-4cc5-b2c6-e7deff07a1ec/travelers7.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Girl in window"
                  src="https://ucarecdn.com/692edf8d-4e7d-4cc5-b2c6-e7deff07a1ec/travelers7.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
          </Sharedbox>
          <p>
              My extensive professional experience means I am able to pay
              attention to detail to pick out the right location, while still
              being able to focus a lot on bringing out your natural emotions to
              catch on camera. <br />
            </p>
          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/4bb6482e-4357-4645-bf19-075cc3aafba8/travelers8.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/c774123b-8f22-4051-beed-7722a0ca2d2c/travelers8.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Girl at canal and windmill"
                src="https://ucarecdn.com/c774123b-8f22-4051-beed-7722a0ca2d2c/travelers8.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/d0284b64-881c-4cf8-b002-b32c7a8fd5c1/travelers9.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/47698a72-627f-42cf-9d8c-8d7dc10a6454/travelers9.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Man standing at green streets"
                src="https://ucarecdn.com/47698a72-627f-42cf-9d8c-8d7dc10a6454/travelers9.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/6f1a8938-5bae-4ef3-8e90-fef39ffa3769/travelers10.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/c373e279-bc91-45d6-902e-dfc4efa1d36a/travelers10.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Girl laughing at bridge"
                src="https://ucarecdn.com/c373e279-bc91-45d6-902e-dfc4efa1d36a/travelers10.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/dfec249b-c90b-4af9-8d3b-ff04335a66b0/travelers11.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/6f27488f-5a43-44fa-b4a1-5af27228d929/travelers11.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Girl sitting on bench"
                src="https://ucarecdn.com/6f27488f-5a43-44fa-b4a1-5af27228d929/travelers11.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/0b63aeda-1575-429c-9c83-09795545b07e/travelers12.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/7bdc3023-3823-425b-86fe-f3660bd89f6c/travelers12.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Girl in front of brick wall"
                src="https://ucarecdn.com/7bdc3023-3823-425b-86fe-f3660bd89f6c/travelers12.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/9a74c78d-6adc-40ba-8f91-5e61a92e7e2a/travelersextra.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/59f17c82-bd0f-48cd-9184-3645e5ac964f/travelersextra.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Girl standing on bridge"
                src="https://ucarecdn.com/59f17c82-bd0f-48cd-9184-3645e5ac964f/travelersextra.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/7e9fea1f-7d72-4345-a8a0-43eff0cd3baa/travelersextra2.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/4ed62e80-af2c-403a-a32f-3e1813ccecdb/travelersextra2.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Girl in pink dress"
                src="https://ucarecdn.com/4ed62e80-af2c-403a-a32f-3e1813ccecdb/travelersextra2.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/a2b936d8-c276-4908-b0ad-f7226a2f5c6c/travelers13.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/9f768183-b413-4737-8654-e2d0d76b6771/travelers13.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Playful girl with flowers"
                src="https://ucarecdn.com/9f768183-b413-4737-8654-e2d0d76b6771/travelers13.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>
          <p>
            If you are traveling solo, this portrait session is perfect for you,
            providing you with a unique insight into some of the most gorgeous
            photo spots in Amsterdam. <br />
            Please feel free to get in touch, and let’s chat about your ideas!
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
          
        </Container>
        <Reviews />
      </div>
    );
  }
}

export default Travelers;
