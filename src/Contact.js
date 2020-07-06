import React, { useState } from "react";
import Navbar from "./Navbar";
import styled, { createGlobalStyle, css } from "styled-components/macro";
import { Helmet } from "react-helmet";
import { Button } from "./Home";
import { fonts } from "./config";

const Container = styled.div`
  min-height: 1200px;
  width: 100%;
  color: #384047;

  form {
    max-width: 500px;
    margin: 10px auto;
    padding: 10px 20px;
    background: rgba(255,228,225, 0.3);
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

  input, textarea {
    background: #384047;
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    background-color:rgba(214, 212, 208, 0.2);
    color: #384047;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 30px;
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
}
  

  label {
    padding-bottom: 10px;
    font-family: ${fonts.cimek};
    opacity: 0.7 ;
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
        <Navbar style={{ background: "black" }} />

        <Container>
          <form
           action="https://formspree.io/mknqqvoz" method="POST">
            <h1>Contact</h1>
            <fieldset>
              <label for="name">Name </label>
              <input type="text" name="name" />

              <br />
              <label for="email">Email</label>
              <input type="email" name="_replyto" />

              <br />
              <label for="subject">Subject</label>
              <input type="text" name="subject" />

              <br />
              <label for="message">Message</label>
              <textarea name="message"></textarea>

            </fieldset>
            <Button type="submit">Send</Button>
          </form>
        </Container>
      </div>
    );
  }
}
export default Contact;
