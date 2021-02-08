import reviews from "./reviews.json";
import styled from "styled-components/macro";
import React from "react";
import { device } from "./mediaquery";
import { fonts, colors } from "./config";
import { CardTitle } from "./Ui";

export const Quote = styled(CardTitle)`
  color: ${colors.cimek};
  text-align: center;
  font-family: ${fonts.mindenmas};
  font-size: 17px;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px;
  line-height: 1.5;

  p {
    width: 100%;
    margin: 0 auto;
  }

  @media ${device.desktop} {
    padding: 50px 400px;
    font-size: 22px;
    height: 20%;
    background: lightblue;
    opacity: 0.8;

    p {
      width: 60%;
      margin: 0 auto;
    }
  }
`;


const Reviews = function () {
  const randomNumber = Math.round(Math.random() * (reviews.length - 1));
  return (
    <Quote>
      {reviews[randomNumber]} <br />
    </Quote>
  );

      <h1>See what others say</h1>;

};

export default Reviews;
