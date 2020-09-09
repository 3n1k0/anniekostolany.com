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

class Boudoir extends React.Component {
  render() {
    return (
      <div className="Boudoir">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book your travelphotographer in Amsterdam</title>
          <meta
            name="description"
            content="Boudoir and escort photography in Amsterdam"
          />
        </Helmet>

        <Container>
          <Szepalcim>
            {" "}
            The softness of silk, the color of peonies, the touch of lace...
            boudoir photography is about the details that reflect inner beauty
            and confidence. It's all about self-love and acceptance. <br />
            Feel like the empowered, strong and beautiful person you are. <br />
            You are unique and capable.
            <br />
            <b>You are unstoppable.</b>
          </Szepalcim>

          <UploadcareImage
            uuid="108988b4-88d8-4f77-8113-c1ac7dff994a"
            alt="Girl posing with flowers"
          />

          <p>
            I know what you’re thinking: that you would love to try boudoir
            photography but you’re afraid to be too awkward. Let me tell you
            that most of my clients used to have this fear before we worked
            together. It is normal to be a little nervous or shy. Heck, most
            people freak out to pose in front of the camera all dressed up!{" "}
            <br />
            <br />
            The beauty in boudoir photography is that you will immerse in
            intimacy, then find your voice and a way to express your inner
            beauty through your body language.
            <br /> I will always respect your boundaries in the meantime and
            never ask you to do something that makes you feel uncomfortable.
            <br /> The goal is for you to feel and see the empowered, strong and
            irresistible woman you are.
          </p>

          <UploadcareImage
            uuid="31f2e79f-55de-4313-a318-bbf84019fc29"
            alt="Girl under veil"
          />

          <UploadcareImage
            uuid="8b478ff8-938d-4df9-8497-25e3b941b631"
            alt="Girl laughing on bed"
          />

          <p>
            My detailed and sophisticated retouch process includes several steps
            to ensure you get the results you seek for. I will make sure that
            you feel 100% confident and comfortable with the images I deliver.
          </p>

          <UploadcareImage
            uuid="21f8ca05-b4fb-4de7-8817-f1181bd4e552"
            alt="Girl with bouquet"
          />

          <UploadcareImage
            uuid="4a517d56-4dd2-46e7-b192-97de0c773555"
            alt="Girl laying on bed"
          />

          <Sharedbox>
            <UploadcareImage
              uuid="41b58a57-0c23-4346-83d9-881ef3f0d104"
              alt="Girl laying on bed"
            />

            <UploadcareImage
              uuid="b1595a34-7207-4398-8ca6-05367ddcd912"
              alt="Bridal boudoir"
            />
          </Sharedbox>

          <UploadcareImage
            uuid="0efec2c3-3a2c-4760-85e0-fce606435a5d"
            alt="Woman sitting in the window"
          />

          <Sharedbox>
            <UploadcareImage
              uuid="c5ece3de-03a7-495f-8521-93ee010a94ac"
              alt="Woman with bouquet"
            />

            <UploadcareImage
              uuid="c97c0d4a-68d6-4480-99a2-ab0d5be7c51d"
              alt="Girl sitting on bed"
            />
          </Sharedbox>

          <Sharedbox>
            <UploadcareImage
              uuid="466280c7-b1fe-4f96-a354-aa2fd4f3d305"
              alt="Woman with bouquet"
            />

            <UploadcareImage
              uuid="9c11f2f8-bb89-46bf-9313-5ff0f3b98138"
              alt="Girl laying on bed"
            />
          </Sharedbox>


          <UploadcareImage
              uuid="b6126280-9536-4534-bd8f-28345a2facec"
              alt="Girl through window"
            />

          <Szepalcim>
            <b>
              MAYBE YOU DON’T THINK IT’S IN YOU, BUT BELIEVE ME, GIVE A GIRL THE
              RIGHT LIGHTING AND SHE CAN DO ANYTHING.
            </b>
          </Szepalcim>

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

export default Boudoir;
