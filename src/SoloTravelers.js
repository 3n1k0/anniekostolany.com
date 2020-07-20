import React, { useState } from "react";
import { device } from "./mediaquery";
import styled, { createGlobalStyle } from "styled-components/macro";
import { fonts } from "./config";
import { StyledImg } from "./Blog";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Button,
  Image,
  ImageContainer,
  CardsContainer,
  CardInnerContainer,
  CardTitle,
} from "./Home";

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
  padding: 150px 0px 100px 0px;
  color: #585656;
  text-align: center;

  h3 {
    font-family: ${fonts.kacskaringos};
    font-size: 2em;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
    padding-bottom: 30px;
  }

  p {
    font-family: ${fonts.mindenmas};
    font-size: 1em;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.005em;
  }
`;

const Quote = styled(CardTitle)`
  color: grey;
  text-align: center;
  font-family: ${fonts.kacskaringos};
  font-size: 1em;
`;

class SoloTravelers extends React.Component {
  render() {
    return (
      <div className="SoloTravelers">
        <Navbar style={{ background: "black" }} />
        <Helmet>
          <title>About Annie</title>
          <meta
            name="description"
            content="About Annie - Amsterdam-based professional photographer"
          />
        </Helmet>
        <Container>
          <h3>
            I bet you are adorable together, but never get 'real photos' taken.
          </h3>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/c327f660-2fbc-46af-b4b8-39b942876196/couplephotos5webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple kissing"
                src="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/cedb59a9-ff26-464e-a421-62a31cbe5a36/coupleshoot10webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/c0922ba5-1a9c-4ba1-8343-ab48b6ba4fba/coupleshoot10.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple with windmills"
                src="https://ucarecdn.com/c0922ba5-1a9c-4ba1-8343-ab48b6ba4fba/coupleshoot10.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/76a0e245-8dc9-4f0c-ae5b-b6c0ff700a4d/coupleshoot11webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/37bab4af-f212-4e20-8cc9-9b45085a5c61/coupleshoot11.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Japanese wedding couple"
                src="https://ucarecdn.com/37bab4af-f212-4e20-8cc9-9b45085a5c61/coupleshoot11.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <Sharedbox>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/1c7357c3-4923-45ec-94a0-71711501f7c0/box1.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/405ba882-5687-4a67-af10-7c91783ca903/box1.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Couple kissing"
                  src="https://ucarecdn.com/405ba882-5687-4a67-af10-7c91783ca903/box1.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
            {/* 
            <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/362ec4e0-1aa1-48f8-8706-528d38364ea8/couplephotos3webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/5de32435-6ccf-4df0-ab96-06c275af0a6f/couplephotos3.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple in front of cafe"
                src="https://ucarecdn.com/5de32435-6ccf-4df0-ab96-06c275af0a6f/couplephotos3.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer> */}

            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/d4561dff-998d-4567-99fc-9b78827fd266/box2.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/53ccd4ec-85fb-4d70-acd1-64788800af98/box2.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Couple kissing"
                  src="https://ucarecdn.com/53ccd4ec-85fb-4d70-acd1-64788800af98/box2.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
          </Sharedbox>

          <CardsContainer>
            <picture style={{ width: "70%" }}>
              <source
                srcset="https://ucarecdn.com/89a9e174-5bc7-42df-956c-e32c54bc7e5e/couplephotos7webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/2785f603-716d-407d-851b-cb2d3eb669e1/couplephotos7.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple with bouquet"
                src="https://ucarecdn.com/2785f603-716d-407d-851b-cb2d3eb669e1/couplephotos7.jpg"
                loading="lazy"
              ></Image>
            </picture>

            <CardInnerContainer>
              <Quote>
                You wanna know how you can tell if you’re meant to be with
                someone? It’s simple. Just sit and have a conversation. Some
                people when you talk to them, it’s like trying to listen to
                classical music on a radio with no antenna. You can push that
                dial back and forth all you want, but you only get static. But
                when you’re meant to be with someone, and they truly are the
                one, you just sit, start talking and a Beethoven sonata will
                begin to play.
                <br />— — The Perfect Date (2019)
              </Quote>
            </CardInnerContainer>
          </CardsContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/fc9f7629-8888-40cd-a8e4-7f9bf6600de2/birthdayshoot001webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/b3e134b6-bcdf-40d8-9575-8d76ac054340/coupleshoot8.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple in field having picnic"
                src="https://ucarecdn.com/b3e134b6-bcdf-40d8-9575-8d76ac054340/coupleshoot8.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/9b40987d-31ff-4f10-a73d-f423a6c79f56/couplephotos9.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/18b2e230-3acf-4435-b26b-3a745f5a6598/couplephotos9.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple in street"
                src="https://ucarecdn.com/18b2e230-3acf-4435-b26b-3a745f5a6598/couplephotos9.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/c327f660-2fbc-46af-b4b8-39b942876196/couplephotos5webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple kissing"
                src="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/c327f660-2fbc-46af-b4b8-39b942876196/couplephotos5webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple kissing"
                src="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/c327f660-2fbc-46af-b4b8-39b942876196/couplephotos5webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple kissing"
                src="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/c327f660-2fbc-46af-b4b8-39b942876196/couplephotos5webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple kissing"
                src="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/c327f660-2fbc-46af-b4b8-39b942876196/couplephotos5webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple kissing"
                src="https://ucarecdn.com/21ea186e-24c9-487a-8fd2-47bbdf2c2c65/couplephotos5.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/8f9f36c0-b25e-474a-852d-c1fd0c017345/couplephotos10webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/05c72d85-a63a-4772-b40a-b07d52db6d19/couplephotos10.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Hand with tulips"
                src="https://ucarecdn.com/05c72d85-a63a-4772-b40a-b07d52db6d19/couplephotos10.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <NavLink to={"/contact"}>
            <Button> Contact Annie </Button>
          </NavLink>
        </Container>
      </div>
    );
  }
}

export default SoloTravelers;
