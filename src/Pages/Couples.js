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
  Sharedbox,
  CardsContainer,
  CardInnerContainer,
  Text,
  Szepalcim,
} from "../Ui";
import Reviews from "../Reviews";
import UploadcareImage from "../UploadcareImage";


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

          <UploadcareImage
            uuid="09f92cee-4187-47fc-ab69-a7942b9695c0"
            alt="Couple kissing in boat"
          />

          <UploadcareImage
            uuid="cedb59a9-ff26-464e-a421-62a31cbe5a36"
            alt="Couple with windmills"
          />

          <UploadcareImage
            uuid="c327f660-2fbc-46af-b4b8-39b942876196"
            alt="Couple kissing"
          />

          <UploadcareImage
            uuid="fc9f7629-8888-40cd-a8e4-7f9bf6600de2"
            alt="Couple in field having picnic"
          />

          <UploadcareImage
            uuid="9b40987d-31ff-4f10-a73d-f423a6c79f56"
            alt="Couple in street"
          />

          <Sharedbox>
            <UploadcareImage
              uuid="1c7357c3-4923-45ec-94a0-71711501f7c0"
              alt="Couple kissing"
            />

            <UploadcareImage
              uuid="d4561dff-998d-4567-99fc-9b78827fd266"
              alt="Couple kissing"
            />
          </Sharedbox>

          <CardsContainer>
            <UploadcareImage
              style={{ width: "70%" }}
              uuid="89a9e174-5bc7-42df-956c-e32c54bc7e5e"
              alt="Couple with bouquet"
            />

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

          <UploadcareImage
            uuid="76a0e245-8dc9-4f0c-ae5b-b6c0ff700a4d"
            alt="Japanese wedding couple"
          />

          <UploadcareImage
            uuid="c14ab8e7-e851-433f-9a0e-7cad6448b771"
            alt="Couple hugging"
          />

          <UploadcareImage
            uuid="ffcac3b3-cab5-4446-9859-373868b56e79"
            alt="Couple hugging on bridge"
          />

          <UploadcareImage
            uuid="34df9015-ef3f-4da5-8a7f-5f6024878d5d"
            alt="Engagement shoot"
          />

          <UploadcareImage
            uuid="1507a4be-c404-4f79-8e86-622b2050da8b"
            alt="Couple in livingroom with cat"
          />

          <UploadcareImage
            uuid="ca478d51-d7f8-4073-83c5-14192ab3227a"
            alt="Couple walking"
          />

          <UploadcareImage
            uuid="cb89ba729-e88b-4f78-ab7b-ef646a85dbae"
            alt="Couple in canal boat"
          />
          
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
