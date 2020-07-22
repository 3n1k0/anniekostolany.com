import React from "react";
import styled from "styled-components/macro";
import { fonts, colors } from "./config";

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
  position: relative;
`;

const Icontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-top: 30px;
`;

const Icon = styled.div`
  font-size: 2em;
  padding: 25px;
  outline: none;
`;

const Numbers = styled.div`
  color: ${colors.tortfeher};
  list-style: none;
  font-family: ${fonts.mindenmas};

  li {
    padding: 10px;
    color: ${colors.tortfeher};
    list-style: none;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Icontainer>
          <Icon>
            <a
              target="_blank"
              href="https://instagram.com/anniekostolany"
              rel="noopener"
            >
              <i
                style={{ color: "white" }}
                class="fab fa-instagram"
                label="Instagram profile"
              ></i>
            </a>
          </Icon>
          <Icon>
            <a
              target="_blank"
              href="https://facebook.com/anniekostolany"
              rel="noopener"
            >
              <i
                style={{ color: "white" }}
                class="fab fa-facebook-f"
                label="Facebook profile"
              ></i>
            </a>
          </Icon>

          <Icon>
            <a href="mailto:mail@anniekostolany.com" label="Send an email">
              <i style={{ color: "white" }} class="far fa-envelope"></i>
            </a>
          </Icon>
        </Icontainer>
        <Numbers>
          <ul>
            <li>VAT No. NL002489576B16</li>
            <li>KvK number: 69847843</li>
            <li> PayPal: mail@anniekostolany.com</li>
          </ul>
        </Numbers>
      </Container>
    );
  }
}
export default Footer;
