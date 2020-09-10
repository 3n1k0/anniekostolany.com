import React, { lazy } from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import { fonts } from "../config";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";
import { Button, ButtonContainer, GoToTopButton, Sharedbox } from "../Ui";
import Reviews from "../Reviews";
import UploadcareImage from "../UploadcareImage";

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
    line-height: 1.8;
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
            the picture. <br />
          </p>
          <UploadcareImage
            uuid="ede82bee-a352-45ab-9391-e774b5ae1ee8"
            alt="Girl in front of windmill"
          />
          <Sharedbox>
            <UploadcareImage
              uuid="87c8c464-2cd1-4e51-8cfa-3ab19b9bfb7b"
              alt="Girl sitting in restaurant"
            />

            <UploadcareImage
              uuid="95112e31-f154-4c77-b049-f3fad519adb7"
              alt="Girl laughing among flowers"
            />
          </Sharedbox>
          <p>
            <br /> When visiting, it’s important to remember that size isn’t
            everything, and despite being a small country geographically, the
            Netherlands is packed with world famous icons. <br />
          </p>
          <Sharedbox>
            <UploadcareImage
              uuid="916d6ec3-f827-42c5-bb6c-300e02823035"
              alt="Girl playing violin in city center"
            />
            <UploadcareImage
              uuid="29537621-3cb8-4d9e-80d7-6251c79dce9c"
              alt="Girl in window"
            />
          </Sharedbox>
          <UploadcareImage
            uuid="4bb6482e-4357-4645-bf19-075cc3aafba8"
            alt="Girl at canal and windmill"
          />
          <UploadcareImage
            uuid="d0284b64-881c-4cf8-b002-b32c7a8fd5c1"
            alt="Man standing at green streets"
          />{" "}
          <UploadcareImage
            uuid="d0284b64-881c-4cf8-b002-b32c7a8fd5c1"
            alt="Man standing at green streets"
          />
          <UploadcareImage
            uuid="6f1a8938-5bae-4ef3-8e90-fef39ffa3769"
            alt="Girl laughing at bridge"
          />
          <UploadcareImage
            uuid="dfec249b-c90b-4af9-8d3b-ff04335a66b0"
            alt="Girl sitting on bench"
          />
          <UploadcareImage
            uuid="0b63aeda-1575-429c-9c83-09795545b07e"
            alt="Girl in front of brick wall"
          />
          <UploadcareImage
            uuid="9a74c78d-6adc-40ba-8f91-5e61a92e7e2a"
            alt="Girl standing on bridge"
          />
          <UploadcareImage
            uuid="7e9fea1f-7d72-4345-a8a0-43eff0cd3baa"
            alt="Girl in pink dress"
          />
          <UploadcareImage
            uuid="a2b936d8-c276-4908-b0ad-f7226a2f5c6c"
            alt="Playful girl with flowers"
          />
          <p>
            The fact is that Amsterdam’s web of canals, the stunning works of
            Old Masters, unique Delft Blue earthenware, and tulip fields
            stretching as far as the eye can see are just the tip of the
            iceberg. Whether you’re looking to explore the hidden beauty spots
            of Amsterdam, or you’re keen to get to know the nearby gem of
            Haarlem, I can show you a world of fantastical imagery you might
            otherwise have missed, as your guide and photographer. My extensive
            professional experience means I am able to pay attention to detail
            to pick out the right location, while still being able to focus a
            lot on bringing out your natural emotions to catch on camera. If you
            are traveling solo, this portrait session is perfect for you,
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
