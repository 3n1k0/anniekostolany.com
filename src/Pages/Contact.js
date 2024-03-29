import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import GlobalStyle from "../config/globalStyles";
import { NavLink } from "react-router-dom";
import { ReviewContainer, StyledButton } from "../config/Ui";
import Image from "../components/Image";
import { Button, ButtonContainer, Gallery } from "../config/Ui";

const TulipInformation = styled.div`
  width: 100%;
  height: 100%;
  background: lightblue;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  div {
    padding-bottom: 20px;
    text-align: center;
  }
`;

const ContactForm = styled.div`
  width: 80%;
  margin-bottom: 50px;
`;
const MainContainer = styled.div`
  width: 100%;
  color: black;
  h2 {
    text-align: center;
    padding-bottom: 20px;
  }
`;

const Container = styled.div`
  padding-top: 100px;
  height: 100%;
  width: 100%;
  color: black;
  display: grid;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  z-index: 40;
  display: grid;
  place-items: center;

  input,
  textarea,
  select,
  button {
    color: black;
    font-size: 15px;
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;
  }

  a:hover {
    text-decoration: none;
  }

  :focus {
    outline: none;
  }

  .inner {
    max-width: 758px;
    margin: auto;
    background: rgba(141, 97, 99, 0.5);
    border: 7px solid rgb(0, 0, 0, 0.4);
    padding: 40px 99px 80px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  textarea {
    resize: none;
  }

  h3 {
    text-transform: uppercase;
    font-size: 36px;
    padding-top: 0px;
    text-align: center;
    margin-bottom: 12px;
    letter-spacing: 2px;
    color: rgba(119, 105, 106, 0.8);
  }

  p {
    text-align: center;
    margin-bottom: 10px;
    line-height: 1.8;
    font-size: 13px;
  }

  .form-group {
    position: relative;
    display: block;
    margin-bottom: 48px;
    margin-top: 30px;
  }
  .form-group span {
    font-size: 15px;
    position: absolute;
    top: 11px;
    transition: all 0.2s ease;
    transform-origin: 0 0;
    cursor: text;
  }
  .form-group span.border {
    height: 2px;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    top: 41px;
    transform: scaleX(0);
    transition: all 0.15s ease;
  }

  .form-control {
    border: none;
    border-bottom: 2px solid rgb(90, 90, 90);
    display: block;
    width: 100%;
    height: 43px;
    font-size: 15px;
    background: none;
  }
  .form-control:focus,
  .form-control {
    border-bottom: 2px solid rgb(119, 105, 106);
  }
  .form-control:focus + span,
  .form-control + span {
    transform: translateY(-22px) scale(0.8);
  }
  .form-control:focus + span + .border,
  .form-control + span + .border {
    transform: scaleX(1);
  }

  textarea.form-control:focus {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 200px;
  }

  button {
    width: 162px;
    height: 51px;
    border: 2px solid rgb(90, 90, 90);
    margin: auto;
    margin-top: 60px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    color: rgb(90, 90, 90);
    text-transform: uppercase;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  button i {
    margin-left: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(119, 105, 106);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  button:hover {
    border-color: transparent;
    color: whitesmoke;
  }
  button:hover:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  button:hover i {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }

  @media (max-width: 767px) {
    h3 {
      font-size: 27px;
    }

    p {
      font-size: 14px;
      padding: 0;
    }

    .inner {
      padding: 27px 20px 37px;
      border: none;
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      -ms-box-shadow: none;
      -o-box-shadow: none;
    }

    .wrapper {
      background: #fff;
      border: 10px solid #fff;
    }
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Contact Annie</title>
          <TulipInformation>
            <Gallery style={{ gridTemplateRows: "1fr 1fr" }}>
              <Image src="/sigrid/sigrid-11.jpg" alt="" />
              <Image src="mix/marina-tulperij-15.jpg" alt="" />
              <Image src="tulips/7.jpg" alt="" />
              <Image src="tulips/6.jpg" alt="" />
              <Image src="tulips/4.jpg" alt="" />
              <Image src="tulips/3.jpg" alt="" />
              <Image src="tulips/1.jpg" alt="" />
              <Image src="tulips/2.jpg" alt="" />
            </Gallery>
            <ButtonContainer>
              <Button to={"/contact"}>Book now </Button>
            </ButtonContainer>
          </TulipInformation>
          <meta name="description" content="Contact Annie" />
        </Helmet>
        <GlobalStyle />
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        setTimeout(function () {window.scrollTo(500, 0)},2);
        <Container>
          <h1>Inquiries: mail@anniekostolany.com</h1>
        </Container>
        <h2>Check out these galleries for inspiration:</h2>
        <Gallery isHover={true}>
          <NavLink to={"/boudoir"}>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/boudoir/6.jpg"
              alt="boudoir shoot"
              loading="lazy"
              title="Boudoir shoots"
            />
          </NavLink>

          <NavLink to={"/wedding"}>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/yalda-en-wesley/Yalda%20en%20Wesley-84.jpg"
              alt="bride"
              loading="lazy"
              title="Wedding shoots"
            />
          </NavLink>

          <NavLink to={"/solo-travelers"}>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/mix/DSC_3360.jpg"
              alt="girl with bouquet"
              loading="lazy"
              title="girl at window"
            />
          </NavLink>
        </Gallery>
        <ReviewContainer style={{ backgroundColor: "rgb(114,123,158)" }}>
          <div>
            <p>
              I worked with Annie two times and both are amazing experiences.
              Most of beautiful pictures on my instagram is her worked. I dont
              have sense/idea of how to make good pictures, but i want to have
              one for my social media. luckily she have the best taste in taking
              pictures... always love to shoot with her and never disappoint
              with the result. I will book her again definitely for the fall
              shoot! — Anna B."
            </p>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/anna-b/Anna-19.jpg"
              alt="girl with bouquet"
              loading="lazy"
            ></img>
          </div>
          <StyledButton to={"/reviews"}>What other people say</StyledButton>
        </ReviewContainer>
      </MainContainer>
    );
  }
}
export default Contact;
