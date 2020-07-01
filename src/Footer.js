import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import { fonts } from "./config";

const Container = styled.div`
  height: 350px;
  background-color: #1f1f1f;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: 40px;
  text-align: center;
  letter-spacing: 1px;
`;

const Icontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Icon = styled.div`
  font-size: 2em;
  padding: 25px;
  outline: none;
`;

const Numbers = styled.div`
  color: white;
  list-style: none;
  font-family: ${fonts.mindenmas};
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Icontainer>
          <Icon>
            <a target="_blank" href="https://instagram.com/anniekostolany">
              <i style={{ color: "white" }} class="fab fa-instagram"></i>
            </a>
          </Icon>
          <Icon>
            <a target="_blank" href="https://facebook.com/anniekostolany">
              <i style={{ color: "white" }} class="fab fa-facebook-f"></i>
            </a>
          </Icon>
          <Icon>
            <a href="mailto:mail@anniekostolany.com">
              <i style={{ color: "white" }} class="far fa-envelope"></i>
            </a>
          </Icon>
        </Icontainer>
        <Numbers>
          <li>VAT No. NL002489576B16</li>
          <li>KvK number: 69847843</li>
          <li> PayPal: mail@anniekostolany.com</li>
        </Numbers>
      </Container>
    );
  }
}
export default Footer;
