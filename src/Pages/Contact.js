import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import { fonts } from "../config";
import { device } from "../mediaquery";
import GlobalStyle from "../globalStyles";

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
  min-height: 120vh;
  width: 100%;
  color: #384047;
  z-index: 40;
  background: white;

  form {
    max-width: 400px;
    margin: 0 auto;
    padding: 10px 20px 10px 20px;
    background: rgba(255, 182, 193, 0.3);
    border-radius: 8px;
    position: relative;
    top: 150px;
    border: none;
    display: flex;
    flex-flow: column;
    justify-content: center;

    @media ${device.desktop} {
      max-width: 500px;
    }
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
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact Annie</title>
          <meta
            name="description"
            content="Amsterdam-based professional photography - Contact Annie "
          />
        </Helmet>
        <GlobalStyle />
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        setTimeout(function () {window.scrollTo(500, 0)},2);
        <Container>
          <p>Hello</p>
          <form action="https://formspree.io/mknqqvoz" method="POST">
            <h1>Contact</h1>
            <fieldset>
              <label for="name">Name </label>
              <input type="text" name="name" required />

              <br />
              <label for="email">Email</label>
              <input type="email" name="_replyto" required />

              <br />
              <label for="subject">Subject</label>
              <input type="text" name="subject" />

              <br />
              <label for="message">Message</label>
              <textarea name="message" required></textarea>
            </fieldset>
            <Button type="submit">Send</Button>
          </form>
        </Container>
      </div>
    );
  }
}
export default Contact;
