import React, { lazy } from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import { fonts } from "../config";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";
import { Button, ButtonContainer, GoToTopButton, Image } from "../Ui";
import Reviews from "../Reviews";
import UploadcareImage from "../UploadcareImage";

const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding-top: 100px;
  margin: 0 auto;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media ${device.tablet} {
    height: 100%;
    flex-flow: row wrap;
    width: 70%;
    margin: 0 auto;
  }
  @media ${device.desktop} {
    height: 500px;
    flex-flow: row;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  color: #585656;
  text-align: left;

  p {
    font-family: ${fonts.mindenmas};
    font-size: 0.9em;
    text-align: left;
    line-height: 1.5;
    letter-spacing: 0.005em;
    max-width: 90%;
    padding-bottom: 20px;

    margin: 0 auto;

    @media ${device.desktop} {
      max-width: 60%;
      font-size: 1.1em;
    }
  }
`;

const Package = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  opacity: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 100px;

  p {
    text-align: left;
    font-size: 18px;

    @media ${device.desktop} {
      text-align: center;
      font-size: 20px;
    }
  }

  h1 {
    font-family: ${fonts.mindenmas};
    font-size: 2em;
    padding: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media ${device.desktop} {
    flex-flow: row nowrap;
  }
`;

const Option = styled.div`
  padding: 40px;
  height: 100%;
  min-height: 420px;
  width: 100%;
  position: relative;
  top: 100px;

  li {
    padding: 5px;
  }
`;

const Information = styled(Package)`
  display: block;
  background: white;

  p {
    text-align: left;
  }

  h1 {
    padding-top: 80px;
  }

  @media ${device.tablet} {
    width: 70%;
    margin: 0 auto;
  }
`;

const Honor = styled.div`
  margin: 0 auto;
  background: lightpink;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-flow: column-reverse;

  img {
    padding: 10px;
    width: 100%;
  }

  @media ${device.desktop} {
    flex-flow: row;
    align-items: center;
    justify-content: center;
    text-align: justify;
    width: 60%;
  }

  @media ${device.tablet} {
    width: 70%;
  }
`;

class Investment extends React.Component {
  render() {
    return (
      <div className="Investment">
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        <Helmet>
          <title>Book a professional photographer</title>
          <meta
            name="description"
            content="Book a professional photographer in Amsterdam"
          />
        </Helmet>

        <Container>
          <Package>
            <Option style={{ background: "#d4af37" }}>
              <h1>Gold Package</h1>
              <p>
                <ul>
                  <li>A pre-session style consultation before your session</li>
                  <li>2-2,5 hours of shooting time</li>
                  <li>Unlimited outfit changes</li>
                  <li>
                    40 retouched, high-resolution images with print-release
                    included
                  </li>
                  <li>
                    A customized, password-protected online gallery available
                    for 6 months after your shoot
                  </li>
                  <li>Price including VAT: 380 Eur</li>
                </ul>
              </p>
            </Option>

            <Option style={{ background: "#C0C0C0" }}>
              <h1>Silver Package </h1>
              <p>
                <ul>
                  <li>A pre-session style consultation before your session</li>
                  <li>1-1,5 hours of shooting time</li>
                  <li>1 outfit change</li>
                  <li>
                    30 retouched, high-resolution images with print-release
                    included
                  </li>
                  <li>
                    A customized, password-protected online gallery available
                    for 6 months after your shoot
                  </li>
                  <li>Price including VAT: 320 Eur</li>
                </ul>
              </p>
            </Option>
          </Package>

          <Information>
            <h1>Events</h1>
            <p>
              You can book Annie Kostolany's photography services for events,
              celebrations, weddings. (min. booking time - 2 hours, €130 / hour)
              Please email me with the details (time, location, number of
              people, duration) to get a perfectly tailored price offer. For my
              wedding price guide and other enquiries please send an email to
              mail@anniekostolany.com.
            </p>
          </Information>

          <Information>
            <h1>Additional information</h1>

            <p>
              50% non-refundable retainer is required for bookings. Bookings
              will not be accepted without this deposit. (In case of illness or
              bad weather, a new appointment date can be agreed, but in the case
              of outright cancellation, the deposit is non-refundable.)
              <br />
              Remaining payment becomes due after the shoot via bank transfer,
              PayPal or cash. Annie Kostolany Photography does not provide .raw
              or unedited photos. <br /> Image delivery: First I provide a
              Pixieset gallery of low-resolution, watermarked images from which
              you can pick your favorites from. When you create this list, I
              receive a notification and can immediately start to retouch and
              edit your final images. During this process you may always choose
              to purchase more photos than the previously agreed number. I
              deliver all your images on Pixieset in high resolution jpeg, in a
              private, password-protected online gallery.
              <br />
              0% interest payment plans are available with any package of your
              choice from Annie Kostolany Photography.
            </p>
          </Information>

          <Honor>
            <p>
              It's an honor that you are considering Annie Kostolany Photography
              - Amsterdam Photographer to capture one of the most important
              moments of your life for YOU and YOUR family. <br />
              We begin the planning with an in-person or phone consultation
              where we will gather all the desires and aspects of what you are
              expecting for your session, including color palette, wardrobe,
              styling, any personal items you'd like to incorporate and we will
              decide the perfect location for your session. <br />
              I am so excited to start planning your DREAM photo session! <br />{" "}
              Let's capture your life’s important moments forever.
              <br />
              <br />
              Ready to book? <br /> Click below to schedule your design
              consultation!
              <ButtonContainer>
                <Button style={{ marginTop: "20px" }} to={"/contact"}>
                  {" "}
                  Contact Annie{" "}
                </Button>
              </ButtonContainer>
            </p>

            <UploadcareImage
              uuid="df3ab74b-37b5-4458-9b23-9e8d883419f6"
              alt="Annie"
            />
          </Honor>

          <ImageContainer>
            <picture>
              <img src="https://ucarecdn.com/0e329440-e81e-4386-bd9f-95a09bc56304/-/scale_crop/1000x1000/smart/-/format/auto/" />
            </picture>

            <picture>
              <img src="https://ucarecdn.com/120f83b8-c65e-4da0-9a5c-422d73fe2a7e/-/scale_crop/1000x1000/smart/-/format/auto/" />
            </picture>

            <picture>
              <img src="https://ucarecdn.com/0c036eea-42d5-4cb7-960d-0b2b3dd13980/-/scale_crop/1000x1000/smart/-/format/auto/" />
            </picture>

            <picture>
              <img src="https://ucarecdn.com/7492b378-d3cf-434f-9c6a-3d4d79b76bbf/-/scale_crop/1000x1000/smart/-/format/auto/" />
            </picture>
          </ImageContainer>
        </Container>
        <Reviews />
      </div>
    );
  }
}

export default Investment;
