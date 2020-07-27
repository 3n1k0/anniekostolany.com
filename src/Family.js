import React from "react";
import { device } from "./mediaquery";
import styled from "styled-components/macro";
import { fonts } from "./config";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { Image, ImageContainer, Text } from "./Home";
import { Quote, ButtonContainer, Szepalcim } from "./Couples";
import { Button } from "./Ui";
import { GoToTopButton } from './FullPost'

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
    font-size: 1em;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.005em;
  }
`;

class Family extends React.Component {
  render() {
    return (
      <div className="Family">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Family & event photography in Amsterdam</title>
          <meta
            name="description"
            content="Family photography - Amsterdam-based professional photographer"
          />
        </Helmet>

        <Container>
        <Szepalcim>
            Whether it's the arrival of a new family member, an engagement, a
            bachelorette party or a family get-together, it's important to have
            these memories captured.{" "}
          </Szepalcim>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/94c82395-3d66-4a9e-b203-59d26f1b070f/family1webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/57c2b527-bce5-490c-a364-6ae7f1abe496/family1.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Mom with child"
                src="https://ucarecdn.com/57c2b527-bce5-490c-a364-6ae7f1abe496/family1.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/a062c50e-8940-4330-8859-8afa84aef62e/family2webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/f5d740cc-8c2b-4e2a-8ba1-51186c55f5c1/family2.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Maternity session"
                src="https://ucarecdn.com/f5d740cc-8c2b-4e2a-8ba1-51186c55f5c1/family2.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>


          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/9f6d9897-4e66-47c0-b094-4e4c379e39ec/family3webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/7b62c14c-eaf0-4288-95e3-59b56317953b/family3.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Little girl with wreath"
                src="https://ucarecdn.com/7b62c14c-eaf0-4288-95e3-59b56317953b/family3.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <Sharedbox>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/09d27c81-d76c-47f6-a041-437e5ad62e43/family4webp.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/49c0ddb8-9c7b-45ec-b48c-12158465d6bd/family4.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Engagement ring on lavender"
                  src="https://ucarecdn.com/49c0ddb8-9c7b-45ec-b48c-12158465d6bd/family4.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>

            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/2e9bbff2-6f91-4fa1-b681-d5621f8182be/family5webp.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/e4e2f15c-749f-4958-b647-5b638fc1f4af/family5.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Engaged couple"
                  src="https://ucarecdn.com/e4e2f15c-749f-4958-b647-5b638fc1f4af/family5.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
          </Sharedbox>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/ac028e34-f6af-46d6-8c0e-4a3947514d3a/family8webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/a1d8f254-0c14-4899-8910-52978d039bf2/family8.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Little boy smiling"
                src="https://ucarecdn.com/a1d8f254-0c14-4899-8910-52978d039bf2/family8.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/a8535f5b-2803-41f3-b151-e2954198b794/family7webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/95a1a976-501d-42d4-9179-28bdad691639/family7.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Silver baby shoes"
                src="https://ucarecdn.com/95a1a976-501d-42d4-9179-28bdad691639/family7.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <Sharedbox>
            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/778aff22-471e-443a-85cc-0b738fae555a/family9.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/89076473-df28-4dec-aa0e-17c15e0f516b/family9.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Little girl cake mash"
                  src="https://ucarecdn.com/89076473-df28-4dec-aa0e-17c15e0f516b/family9.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>

            <ImageContainer>
              <picture>
                <source
                  srcset="https://ucarecdn.com/88fbb8c2-c5c3-484d-a097-e8da1d34d3b1/family6webp.webp"
                  type="image/webp"
                  loading="lazy"
                />
                <source
                  srcset="https://ucarecdn.com/c9b89843-162b-4165-ac55-eb39220de0a5/family6.jpg"
                  type="image/jpeg"
                  loading="lazy"
                />

                <Image
                  alt="Baby in Santa hat"
                  src="https://ucarecdn.com/c9b89843-162b-4165-ac55-eb39220de0a5/family6.jpg"
                  loading="lazy"
                ></Image>
              </picture>
            </ImageContainer>
          </Sharedbox>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/445803d0-ac3f-44c0-a76f-0c8a434dc390/family10webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/0b57eedc-3b72-4395-9838-61a0cc2d25b8/family10.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Siblings with dog"
                src="https://ucarecdn.com/0b57eedc-3b72-4395-9838-61a0cc2d25b8/family10.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/f1de2e17-8c5f-4ea3-8275-dbb8cdb26fad/family11webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/9be00310-3d01-4d8e-9d7a-12aad9124079/family11.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Maternity session"
                src="https://ucarecdn.com/9be00310-3d01-4d8e-9d7a-12aad9124079/family11.jpg"
                loading="lazy"
              ></Image>
            </picture>
          </ImageContainer>

          <ImageContainer>
            <picture>
              <source
                srcset="https://ucarecdn.com/685b444f-f8e9-4b4a-89b5-a23427faccdf/family12webp.webp"
                type="image/webp"
                loading="lazy"
              />
              <source
                srcset="https://ucarecdn.com/fd981fa5-c4a8-44c4-a2aa-63333fc4ae57/family12.jpg"
                type="image/jpeg"
                loading="lazy"
              />

              <Image
                alt="Event photography"
                src="https://ucarecdn.com/fd981fa5-c4a8-44c4-a2aa-63333fc4ae57/family12.jpg"
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
        <Quote>
            <p>Annie is wonderful to work with! We’re not camera-natural but Annie
            really made us at ease. The photos turned out so well even at a time
            when natural light was fading away. There was nothing artificial or
            posed about the photos, they captured our moments. Planning around
            the time of the shoot and our communication were also easy. We
            received our photos earlier than expected. We would recommend this
            experience to everyone! Once again – thank you Annie!
            <br /> — Karen
            <br /> ⭐⭐⭐⭐⭐
            </p>
          </Quote>
          <Quote>
            <p>
            Annie is such a great person to work with. She really listens to
            what you want, gives tips and makes you feel very relaxed. Thinking
            ‘bout doing another session with her already!! 😀 
            <br /> — Agatha C.
            <br /> ⭐⭐⭐⭐⭐
            </p>
          </Quote>
      </div>
    );
  }
}

export default Family;
