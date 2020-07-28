import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import { fonts } from "./config";

const Button = styled.button`
  padding: 20px;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 21px 34px;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  width: 150px;
  margin: 0 auto;

  &:hover {
    background: rgba(10, 10, 10, 0.3);
  }
`;

const Container = styled.div`
  min-height: 1200px;
  width: 100%;
  color: #384047;

  form {
    max-width: 500px;
    margin: 0 auto;
    padding: 10px 20px 30px 20px;
    background: rgba(255, 182, 193, 0.3);
    border-radius: 8px;
    position: relative;
    top: 200px;
    border: none;
    display: flex;
    flex-flow: column;
    justify-content: center;
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
    margin-bottom: 30px;

    & :focus {
      box-shadow: 8px 8px 35px rgba(192, 192, 192, 0.3);
    }
  }

  textarea {
    height: 200px;
  }

  h1 {
    font-family: ${fonts.cimek};
    text-transform: uppercase;
    text-align: center;
    font-size: 37px;
    line-height: 1.4;
    letter-spacing: 0.337em;
    font-weight: 100;
    padding-bottom: 50px;
    padding-top: 26px;
  }

  label {
    padding-bottom: 10px;
    font-family: ${fonts.cimek};
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
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />
        setTimeout(function () {window.scrollTo(500, 0)},2);
        <Container>
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
