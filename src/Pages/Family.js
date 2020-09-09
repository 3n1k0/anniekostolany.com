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
  Szepalcim,
} from "../Ui";
import Reviews from "../Reviews";
import UploadcareImage from "../UploadcareImage";

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

          <UploadcareImage
            uuid="94c82395-3d66-4a9e-b203-59d26f1b070f"
            alt="Couple in canal boat"
          />

          <UploadcareImage
            uuid="a062c50e-8940-4330-8859-8afa84aef62e"
            alt="Maternity session"
          />

          <UploadcareImage
            uuid="9f6d9897-4e66-47c0-b094-4e4c379e39ec"
            alt="Little girl with wreath"
          />

          <Sharedbox>
            <UploadcareImage
              uuid="09d27c81-d76c-47f6-a041-437e5ad62e43"
              alt="Engagement ring on lavender"
            />

            <UploadcareImage
              uuid="2e9bbff2-6f91-4fa1-b681-d5621f8182be"
              alt="Engaged couple"
            />
          </Sharedbox>

          <UploadcareImage
            uuid="ac028e34-f6af-46d6-8c0e-4a3947514d3a"
            alt="Little boy smiling"
          />

          <UploadcareImage
            uuid="a8535f5b-2803-41f3-b151-e2954198b794"
            alt="Silver baby shoes"
          />

          <Sharedbox>
            <UploadcareImage
              uuid="778aff22-471e-443a-85cc-0b738fae555a"
              alt="Little girl cake mash"
            />

            <UploadcareImage
              uuid="88fbb8c2-c5c3-484d-a097-e8da1d34d3b1"
              alt="Baby in Santa hat"
            />
          </Sharedbox>

          <UploadcareImage
            uuid="445803d0-ac3f-44c0-a76f-0c8a434dc390"
            alt="Siblings with dog"
          />

          <UploadcareImage
            uuid="f1de2e17-8c5f-4ea3-8275-dbb8cdb26fad"
            alt="Maternity session"
          />

          <UploadcareImage
            uuid="685b444f-f8e9-4b4a-89b5-a23427faccdf"
            alt="Event photography"
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

export default Family;
