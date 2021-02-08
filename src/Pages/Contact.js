import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import { fonts } from "../config/config";
import { device } from "../config/mediaquery";
import GlobalStyle from "../config/globalStyles";

const Recommendation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media ${device.desktop} {
    max-width: 80%;
    flex-direction: row;
  }

  a {
    width: 100%;
    margin: 15px;
  }

  h4 {
    color: white;
    font-size: 40px;
    font-style: italic;
    letter-spacing: 0.021em;
    font-weight: 600;
  }
`;

const Box1 = styled.div`
  background: url("https://ucarecdn.com/25e3c7a9-9e40-43c9-9c02-835ae28d50a7/boudoiranniekostolany.jpg");
  background-size: cover;
  background-position: 0% 50%;
  height: 300px;
  width: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Box2 = styled.div`
  background: url("https://ucarecdn.com/9c378587-d5e9-4fc8-b5e0-a4e804084bfe/wedding73.jpg");
  background-size: cover;
  background-position: 0% 50%;
  height: 300px;
  width: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Box3 = styled.div`
  background: url("https://ucarecdn.com/03f6490e-705d-4d82-b58e-a0b651c0cee2/anniekostolanyboudoir.jpg");
  background-size: cover;
  background-position: 0% 47%;
  height: 300px;
  width: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 21px 34px;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  width: 100%;
  margin: 30px auto;
  border: 1px solid black;

  &:hover {
    background: rgba(90, 10, 10, 0.3);
  }
`;

const Title = styled.div`
  font-family: ${fonts.mindenmas};
  text-transform: uppercase;
  text-align: center;
  font-size: 17px;
  line-height: 1.5;
  letter-spacing: 0.337em;
  font-weight: 100;
  padding: 26px 0px;

  @media ${device.desktop} {
    max-width: 80%;
    font-size: 29px;
  }
`;

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  color: #384047;
  z-index: 40;
  background: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 20px; 

  h2 {
    text-align: center;
    font-size: 17px;

    @media ${device.desktop} {
      max-width: 80%;
      font-size: 25px;
    }
  }

  form {
    width: 100%;
    min-width: 450px;
    max-width: 450px;
    margin: 0 auto;
    padding: 10px 20px 10px 20px;
    background: rgba(76, 0, 19, 0.09);
    border-radius: 8px;
    position: relative;
    border: none;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 50px;
  }

  fieldset {
    display: flex;
    flex-flow: column;

    border: none;
  }

  input,
  textarea {
    background: #384047;
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    background-color: rgba(214, 212, 208, 0.2);
    color: #384047;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    /* margin-bottom: 30px; */

    & :focus {
      box-shadow: 8px 8px 35px rgba(192, 192, 192, 0.3);
    }
  }

  textarea {
    height: 200px;
  }

  h1 {
    font-family: ${fonts.mindenmas};
    text-transform: uppercase;
    text-align: center;
    font-size: 37px;
    line-height: 1.5;
    letter-spacing: 0.337em;
    font-weight: 100;
    padding-bottom: 50px;
    padding-top: 26px;
  }

  label {
    padding-bottom: 10px;
    font-family: ${fonts.mindenmas};
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: black;
  }
`;

const RecommendationTitle = styled.div`
  font-size: 29px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Raleway";
  letter-spacing: 2px;
`;

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact Annie</title>
          <meta name="description" content="Contact Annie" />
        </Helmet>
        <GlobalStyle />
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        setTimeout(function () {window.scrollTo(500, 0)},2);
        <Container>
          <Title>
            Classic and beautiul weddings
            <br />
            Luxury boudoir & intimate portraiture photography
          </Title>
          <h2>
            Contact me with questions, ideas and booking requests.
            <br />I will try to get back to you within a working day!{" "}
          </h2>
          <form action="https://formspree.io/mknqqvoz" method="POST">
            <h1>Contact</h1>
            <fieldset>
              <label for="name">Name </label>
              <input type="text" name="name" id="name" required />

              <br />
              <label for="email">Email</label>
              <input type="email" name="email" id="email" required />

              <br />
              <label for="subject">Subject</label>
              <input type="text" name="subject" id="subject" />

              <br />
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </fieldset>
            <Button type="submit">Send</Button>
          </form>

          <RecommendationTitle>
            Check out these galleries for inspiration:
          </RecommendationTitle>
          <Recommendation>
            <a href="https://anniekostolany.com/boudoir">
              <Box1>
                <h4>Boudoir gallery</h4>
              </Box1>
            </a>
            <a href="https://anniekostolany.com/wedding">
              <Box2>
                <h4>Wedding gallery</h4>
              </Box2>
            </a>
            <a href="https://anniekostolany.com/solo-travelers">
              <Box3>
                <h4>Portrait gallery</h4>
              </Box3>
            </a>
          </Recommendation>
        </Container>
      </div>
    );
  }
}
export default Contact;
