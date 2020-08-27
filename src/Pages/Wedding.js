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

class Wedding extends React.Component {
  render() {
    return (
      <div className="Wedding">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book your travelphotographer in Amsterdam</title>
          <meta
            name="description"
            content="Wedding photography in the Netherlands"
          />
        </Helmet>

        <Container>
          <p>
            It might seem cliché, but it’s still true; a picture paints a
            thousand words. <br />
            What makes photography such a special medium is its ability to
            distil the essence of a magical day into a single image – and on no
            day is this more important than that of your wedding. <br />
            As a gathering of friends and family celebrating the love between
            two special people, your wedding will be filled with the moments
            that make life worth living, from the biggest events to the sweetest
            little things. <br />
            <br />A smile, a hug, the look on your fathers face, or maybe your
            mom helping you to get dressed; all these beautiful instants may
            only last a second, but their memories can last a lifetime with the
            right picture.
          </p>


          {/* <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/93834bdb-4f48-4cb2-a641-777589332922/wedding1.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/93e1b15c-a278-42e9-a357-f7f545fa83c0/wedding1.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Wedding couple in nature"
                src="https://ucarecdn.com/5e406a70-1d92-4ca1-be1a-f9bada28a891/-/preview/800x1300/-/format/auto/"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer> */}


          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/93834bdb-4f48-4cb2-a641-777589332922/wedding1.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/93e1b15c-a278-42e9-a357-f7f545fa83c0/wedding1.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Wedding couple"
                src="https://ucarecdn.com/93e1b15c-a278-42e9-a357-f7f545fa83c0/wedding1.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/d1f2ac84-f838-4752-b93e-76e9bb57ce1c/wedding2.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/2632ff54-eeb5-4037-886d-4b4499824e03/wedding2.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Wedding couple at church"
                src="https://ucarecdn.com/2632ff54-eeb5-4037-886d-4b4499824e03/wedding2.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>
          <p>
            Perfectly catching such precious memories on camera is no easy task
            though, meaning your wedding photographer will be one of the most
            important and valuable suppliers that you book. Having organized my
            own wedding three years ago, I also know that from the moment the
            blushing bride/groom to be say “yes”, there are a host of other
            crucial matters to attend to. <br /> Rest assured if you choose me
            to document your special day, photography is one thing you won’t
            have to worry about anymore.
            <br /> As an accomplished international portrait, wedding and
            lifestyle photographer, I can promise you to give all my
            professional knowledge, my artistic skills and the best equipment
            available to capture the most significant moments of your big day.
          </p>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/9945de54-9b77-4995-a255-02e396e34a7e/wedding3.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/1afa25b5-de6a-4d52-a7ca-c73d5b516578/wedding3.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Wedding couple on boat"
                src="https://ucarecdn.com/1afa25b5-de6a-4d52-a7ca-c73d5b516578/wedding3.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/164c35b3-9ba2-473a-874d-4ee523ebf091/wedding4.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/0148af6e-13fb-4d8e-ad1c-c424617661da/wedding4.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Wedding couple laughing"
                src="https://ucarecdn.com/0148af6e-13fb-4d8e-ad1c-c424617661da/wedding4.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <Sharedbox>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/e3437f95-38c2-46de-bbe9-fe31d715783e/wedding7.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/801a2243-0661-4223-966c-0786b8b4a192/wedding7.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Ballerina shoes on piano"
                  src="https://ucarecdn.com/801a2243-0661-4223-966c-0786b8b4a192/wedding7.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/07e272ea-a371-4850-ade9-5b877b82afd7/wedding6.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/5e78a858-9f6a-4089-bbdb-9c370d816a78/wedding6.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Ring with bouquet"
                  src="https://ucarecdn.com/5e78a858-9f6a-4089-bbdb-9c370d816a78/wedding6.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
          </Sharedbox>

          <Sharedbox>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/bb0ca539-d231-4001-9e4b-a1e75c6e21a9/wedding5.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/b4323325-1596-4a96-9c3f-cd98d4b6e1c7/wedding5.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Wedding couple walking"
                  src="https://ucarecdn.com/b4323325-1596-4a96-9c3f-cd98d4b6e1c7/wedding5.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>

            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/aeb10e38-8714-439e-bc3b-07f3b941667d/wedding8.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/31205414-c6ae-4f5e-9202-21f05b538ddd/wedding8.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Wedding couple laughing"
                  src="https://ucarecdn.com/31205414-c6ae-4f5e-9202-21f05b538ddd/wedding8.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
          </Sharedbox>

          <Sharedbox>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/5e401f96-0e69-4fea-b308-9d5a6206ffb0/wedding9.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/0ec2c95d-349b-40b1-a8d5-df5f2c3d20d1/wedding9.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Wedding couple in front of church"
                  src="https://ucarecdn.com/0ec2c95d-349b-40b1-a8d5-df5f2c3d20d1/wedding9.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>

            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/475e3e9b-6276-42ea-a063-747d8c2781cc/weddding10.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/36b1b0b5-6693-45c1-92b2-fdbc9a170890/weddding10.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Wedding couple in front of church"
                  src="https://ucarecdn.com/36b1b0b5-6693-45c1-92b2-fdbc9a170890/weddding10.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
          </Sharedbox>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/422d4122-abc7-4bad-8f77-1909bbc85868/wedding11.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/978cc10e-fbf9-4223-b407-41ee0aade5a9/wedding11.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Wedding couple"
                src="https://ucarecdn.com/978cc10e-fbf9-4223-b407-41ee0aade5a9/wedding11.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>
          <p>
            While I am currently based in the Netherlands, I am available
            worldwide, so if my services sound right for you, please feel free
            to reach out and send me a message. We can meet for a coffee, or we
            can discuss your ideas via Skype, phone or email.
          </p>

          <ButtonContainer>
            <Button to={"/contact"}> Request </Button>
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

export default Wedding;
