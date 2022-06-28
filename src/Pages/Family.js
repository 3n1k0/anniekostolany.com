import React from "react";
import styled from "styled-components/macro";
import { fonts } from "../config/config";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import {
  Button,
  ButtonContainer,
  DoubleImageContainer,
  MainContainer,
  ReviewContainer,
  StyledButton,
} from "../config/Ui";
import Reviews from "./Reviews";
import UploadcareImage from "../components/UploadcareImage";

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

        <MainContainer>
          <p>
            Whether it's the arrival of a new family member, an engagement, a
            bachelorette party or a family get-together, it's important to have
            these memories captured.{" "}
          </p>

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

          <DoubleImageContainer>
            <UploadcareImage
              uuid="09d27c81-d76c-47f6-a041-437e5ad62e43"
              alt="Engagement ring on lavender"
            />

            <UploadcareImage
              uuid="2e9bbff2-6f91-4fa1-b681-d5621f8182be"
              alt="Engaged couple"
            />
          </DoubleImageContainer>

          <UploadcareImage
            uuid="ac028e34-f6af-46d6-8c0e-4a3947514d3a"
            alt="Little boy smiling"
          />

          <UploadcareImage
            uuid="a8535f5b-2803-41f3-b151-e2954198b794"
            alt="Silver baby shoes"
          />

          <DoubleImageContainer>
            <UploadcareImage
              uuid="778aff22-471e-443a-85cc-0b738fae555a"
              alt="Little girl cake mash"
            />

            <UploadcareImage
              uuid="88fbb8c2-c5c3-484d-a097-e8da1d34d3b1"
              alt="Baby in Santa hat"
            />
          </DoubleImageContainer>

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
          </ButtonContainer>
        </MainContainer>
        <ReviewContainer>
          <div>
            <p>
              Annie is such a great and talented photographer! She did an
              amazing Job and we couldn´t be happier. From beginning i knew she
              is the perfect photographer and person for my planned marriage
              proposal. She took care of everything so that the moment was just
              perfect. The location, lights, position everything was adoreable.
              Additionally she is such a warm Person and we felt really
              comfortable during the shoot! She captured our real emotions
              perfectly. We can recommend her to everyone!!! Annie - thank you
              so much.
              <br />- Sebastian W.
            </p>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/amsterdam-proposal-18.jpg"
              alt="surprise proposal"
              loading="lazy"
            ></img>
          </div>
          <StyledButton to={"/reviews"}>What other people say</StyledButton>
        </ReviewContainer>
      </div>
    );
  }
}

export default Family;
