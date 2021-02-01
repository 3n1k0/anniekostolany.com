import React from "react";
import styled from "styled-components/macro";
import { fonts, colors } from "./config";

const Container = styled.div`

  height: 400px;
  background-color: rgba(31, 31, 31, 0.9);
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: 40px;
  text-align: center;
  letter-spacing: 1px;
  position: relative;
  bottom: 0;
`;

export const Icontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-top: 30px;
`;

export const Icon = styled.div`
  font-size: 2em;
  padding-left: 25px;
  padding-right: 25px;
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
      <Container role="contentinfo">

        <Icontainer>
          <Icon>
            <a
              aria-label="This is a link to my Instagram profile"
              target="_blank"
              href="https://instagram.com/anniekostolany"
              rel="noreferrer noopener"
            >
              <i
                style={{ color: "white" }}
                className="fab fa-instagram"
                label="Instagram profile"
              ></i>
            </a>
          </Icon>
          <Icon>
            <a
              aria-label="This is a link to my Facebook page"
              target="_blank"
              href="https://facebook.com/anniekostolany"
              rel="noreferrer noopener"
            >
              <i
                style={{ color: "white" }}
                className="fab fa-facebook-f"
                label="Facebook profile"
              ></i>
            </a>
          </Icon>

          <Icon>
            <a
              aria-label="By clicking here you can send me an email"
              rel="noreferrer noopener"
              href="mailto:mail@anniekostolany.com"
              label="Send an email"
            >
              <i style={{ color: "white" }} className="far fa-envelope"></i>
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
