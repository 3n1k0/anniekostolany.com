import React from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import { fonts, colors } from "../config";
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
  Szepalcim,
} from "../Ui";
import Reviews from "../Reviews";




const Sharedbox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;

  @media ${device.desktop} {
    width: 60%;
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-top: 150px;
  color: #585656;
  text-align: center;

  p {
    font-family: ${fonts.mindenmas};
    font-size: 1em;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.005em;
  }
`;

class Couples extends React.Component {
  render() {
    return (
      <div className="Couples">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Couple photographer in Amsterdam</title>
          <meta
            name="description"
            content="Couple photography - Amsterdam-based professional photographer"
          />
        </Helmet>
        <Container>
          <Text>
            <Szepalcim>
              I bet you are adorable together, but never get 'real photos'
              taken.
            </Szepalcim>
          </Text>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/09f92cee-4187-47fc-ab69-a7942b9695c0/COUPLES2webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/83a15248-7e67-409f-88fd-6c0168f55149/COUPLES2.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple kissing in boat"
                src="https://ucarecdn.com/83a15248-7e67-409f-88fd-6c0168f55149/COUPLES2.jpg"
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
              You wanna know how you can tell if you’re meant to be with
              someone? It’s simple. Just sit and have a conversation. Some
              people when you talk to them, it’s like trying to listen to
              classical music on a radio with no antenna. You can push that dial
              back and forth all you want, but you only get static. But when
              you’re meant to be with someone, and they truly are the one, you
              just sit, start talking and a Beethoven sonata will begin to play.
              <br /> — The Perfect Date (2019)
            </CardInnerContainer>
          </CardsContainer>

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

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/c14ab8e7-e851-433f-9a0e-7cad6448b771/COUPLES3webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/86aeb67d-80d5-4a43-8acd-838613dfbd3e/COUPLES3.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple hugging"
                src="https://ucarecdn.com/86aeb67d-80d5-4a43-8acd-838613dfbd3e/COUPLES3.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/ffcac3b3-cab5-4446-9859-373868b56e79/COUPLES4webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/fae18b63-2018-4827-83f9-6e0489ce6a7f/COUPLES4.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple hugging on bridge"
                src="https://ucarecdn.com/fae18b63-2018-4827-83f9-6e0489ce6a7f/COUPLES4.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/34df9015-ef3f-4da5-8a7f-5f6024878d5d/COUPLES5webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/cfc01f4a-7b80-45f8-ae67-da0517b90a06/COUPLES5.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Engagement shoot"
                src="https://ucarecdn.com/cfc01f4a-7b80-45f8-ae67-da0517b90a06/COUPLES5.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>
          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/1507a4be-c404-4f79-8e86-622b2050da8b/COUPLES10webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/672e9e0b-4ed3-433b-a5aa-2a89738d6e88/COUPLES10.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple in livingroom with cat"
                src="https://ucarecdn.com/672e9e0b-4ed3-433b-a5aa-2a89738d6e88/COUPLES10.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>
          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/ca478d51-d7f8-4073-83c5-14192ab3227a/COUPLES6webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/cf9d6b54-8192-4caf-a30d-2d1908d987c9/COUPLES6.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple walking"
                src="https://ucarecdn.com/cf9d6b54-8192-4caf-a30d-2d1908d987c9/COUPLES6.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/b89ba729-e88b-4f78-ab7b-ef646a85dbae/COUPLES1webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/6499539d-4db7-4e33-8ae3-23e9d6aab07b/COUPLES1.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Couple in canal boat"
                src="https://ucarecdn.com/6499539d-4db7-4e33-8ae3-23e9d6aab07b/COUPLES1.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>
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

export default Couples;
