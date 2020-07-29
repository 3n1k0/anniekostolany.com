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
  Szepalcim,
} from "../Ui";
import Reviews from "../Reviews";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 150px 0px 0px 0px;
  color: #585656;
  text-align: center;

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
  background: #d4af37;
  width: 100%;
  text-align: center;
  opacity: 0.9;
  display: flex;

  p {
    text-align: center;
  }

  h1 {
    margin-top: 30px;
    font-family: ${fonts.mindenmas};
    font-size: 3em;
    padding: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const Option = styled.div`
  width: 50%;
`;

const Information = styled(Package)`
  display: block;
  background: white;
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
            <Option>
              <h1>Gold Option</h1>
              <p>
                <ul>
                  <li>Pre-consultation before your session</li>
                  <li>2-2,5 hours of shooting time</li>
                  <li>Unlimited outfit changes</li>
                  <li>40 retouched, high-resolution</li>
                  <li>
                    Delivered to you in a password-protected online gallery
                  </li>
                  <li>Price including VAT: 380 Eur</li>
                </ul>
              </p>
            </Option>

            <Option style={{ background: "#C0C0C0" }}>
              <h1>Silver Option </h1>
              <p>
                <ul>
                  <li>Up to 6 people</li>
                  <li>1-1,5 hours of shooting time</li>
                  <li>Pre-consultation before your session</li>
                  <li>30 retouched, high-resolution photographs</li>
                  <li>
                    Delivered to you in a password-protected online gallery
                  </li>
                  <li>Price including VAT: 320 Eur</li>
                </ul>
              </p>
            </Option>
          </Package>

          <Information>
          <h1>Events</h1>
            <p>
              
              You can book Annie Kostolany's photography
              services for events, celebrations, weddings. (min. booking time -
              2 hours, €130 / hour) Please email me with the details (time, location, number
              of people, duration) to get a perfectly tailored price offer. For
              my wedding price guide and other enquiries please send an email to
              mail@anniekostolany.com.
            </p>
          </Information>

          <Information>
            <h1>Important information</h1>

            <p>
              50% non-refundable retainer is required for bookings. Bookings
              will not be accepted without this deposit. (In case of illness or
              bad weather, a new appointment date can be agreed, but in the case
              of outright cancellation, the deposit is non-refundable.)
              Remaining payment becomes due after the shoot via bank transfer,
              PayPal or cash. Annie Kostolany Photography does not provide .raw
              or unedited photos. Image delivery: First I provide a Pixieset
              gallery of low-resolution, watermarked images from which you can
              pick your favorites from. When you create this list, I receive a
              notification and can immediately start to retouch and edit your
              final images. During this process you may always choose to
              purchase more photos than the previously agreed number. I deliver
              all your images on Pixieset in high resolution jpeg, in a private,
              password-protected online gallery.
            </p>
          </Information>

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

export default Investment;
