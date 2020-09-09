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
} from "../Ui";
import Reviews from "../Reviews";
import UploadcareImage from "../UploadcareImage";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const SliderContainer = styled.div`
  height: 400px;
`;

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
  padding-top: 50px;
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

const SliderImage = styled(UploadcareImage)`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const CarouselContainer = styled.div`
  position: relative;
  padding: 100px 0px 0px 0px;
`;

class Wedding extends React.Component {
  render() {
    return (
      <div className="Wedding">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book your wedding photographer in the Netherlands</title>
          <meta
            name="description"
            content="Wedding photography in the Netherlands"
          />
        </Helmet>

        <CarouselContainer>
          <AliceCarousel autoPlay autoPlayInterval="2000">
            <SliderImage
              uuid="220fec4e-f1b5-4205-9695-d7cae46b6627"
              alt="wedding couple"
            />

            <SliderImage
              uuid="120f83b8-c65e-4da0-9a5c-422d73fe2a7e"
              alt="wedding couple"
            />

            <SliderImage
              uuid="342b1cc6-9bc9-4232-9c15-c12864514be9"
              alt="wedding couple"
            />
          </AliceCarousel>
        </CarouselContainer>

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

          <UploadcareImage
            uuid="6539880f-af30-46f0-a507-072135598a15"
            alt="wedding couple smiling kissing"
          />

          <UploadcareImage
            uuid="a1bf721f-0a0c-4933-8464-45082a737516"
            alt="bridal couple standing on field"
          />

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

          <UploadcareImage
            uuid="9945de54-9b77-4995-a255-02e396e34a7e"
            alt="Wedding couple on boat"
          />

          <UploadcareImage
            uuid="93834bdb-4f48-4cb2-a641-777589332922"
            alt="Wedding couple with windmills"
          />

          <UploadcareImage
            uuid="164c35b3-9ba2-473a-874d-4ee523ebf091"
            alt="Wedding couple with fountain"
          />

          <UploadcareImage
            uuid="e3437f95-38c2-46de-bbe9-fe31d715783e"
            alt="Bridesmaids shoes"
          />

          <Sharedbox>
            <UploadcareImage
              uuid="e3437f95-38c2-46de-bbe9-fe31d715783e"
              alt="Bridesmaids shoes"
            />

            <UploadcareImage
              uuid="07e272ea-a371-4850-ade9-5b877b82afd7"
              alt="Ring with bouquet"
            />
          </Sharedbox>

          <UploadcareImage
            uuid="81a1f936-6bbf-4dad-b338-969acd6f4952"
            alt="Bride"
          />

          <UploadcareImage
            uuid="5e406a70-1d92-4ca1-be1a-f9bada28a891"
            alt="Wedding couple in field"
          />

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
