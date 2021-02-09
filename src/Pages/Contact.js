import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import { device } from "../config/mediaquery";
import GlobalStyle from "../config/globalStyles";
import { NavLink } from "react-router-dom";
import { Gallery } from "../config/Ui";


const MainContainer = styled.div`
img{

  &:hover{
filter: brightness(80%);
  }
}
`

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


const Container = styled.div`
  height: 100%;
  width: 100%;
  color: #384047;
  z-index: 40;
  background: white;
  display: grid;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 20px;

  h2 {
    text-align: center;
    font-size: 17px;

    @media ${device.desktop} {
      font-size: 25px;
    }
  }
`;
const ContactForm = styled.div`
display: grid;
justify-content: center;

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

    & :focus {
      box-shadow: 8px 8px 35px rgba(192, 192, 192, 0.3);
    }
  }

  textarea {
    height: 200px;
  }

  h1 {
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
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: black;
  }
`;


class Contact extends React.Component {
  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Contact Annie</title>
          <meta name="description" content="Contact Annie" />
        </Helmet>
        <GlobalStyle />
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        setTimeout(function () {window.scrollTo(500, 0)},2);
        <Container>
          <h2>Classic and beautiul weddings</h2>
          <h2>Luxury boudoir & intimate portraiture photography</h2>
          <p>
            Contact me with questions, ideas and booking requests. I will try to
            get back to you within a working day!{" "}
          </p>
          <ContactForm>
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
          </ContactForm>

          <h2>Check out these galleries for inspiration:</h2>
        </Container>
        <Gallery>
          <NavLink to={"/boudoir"}>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/6.jpg"
              alt="boudoir shoot"
              loading="lazy"
              title="Boudoir shoots"
            />
          </NavLink>

          <NavLink to={"/wedding"}>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/Yalda%20en%20Wesley-84.jpg"
              alt="bride"
              loading="lazy"
              title="Wedding shoots"
            />
          </NavLink>

          <NavLink to={"/solo-travelers"}>
            <img
              src="https://static.llllllllllll.com/eniko/anniekostolany/DSC_3360.jpg"
              alt="girl with bouquet"
              loading="lazy"
              title="Travel photogrpahy"
            />
          </NavLink>
        </Gallery>
      </MainContainer>
    );
  }
}
export default Contact;
