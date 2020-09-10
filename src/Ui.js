
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { colors } from "./config";
import { fonts } from './config'
import { device } from "./mediaquery";

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 50px auto;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
    flex-flow: row nowrap;
    display: flex;
    width: 60%;
    margin: 0 auto;
    padding: 50px 0px;
    justify-content: flex-start;
  }
  @media ${device.tablet} {
    width: 60%;
  }

`;

export const CardInnerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  line-height: 2;
  width: 100%;
  color: rgb(88, 86, 86);
  font-family: ${fonts.mindenmas};

  @media ${device.desktop} {
    padding: 0px 50px;
  }
`;

export const Text = styled.div`
  margin: 0 auto;
  font-family: ${fonts.mindenmas};
  width: 90%;
  color: ${colors.footerfekete};


  @media ${device.desktop} {
    width: 60%;
  }

  p{
    font-size: 20px;
    width: 100%;
  }


`;

export const Szepalcim = styled.div`
  font-family: ${fonts.mindenmas};
  font-weight: 100;
  font-size: 1.3em;

  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.5em;
  padding-bottom: 30px;
  max-width: 100%;
  margin: 0 auto;

  @media ${device.desktop} {
    max-width: 65%;
    font-size: 1.3em;
  }
`;


export const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${device.desktop} {
    width: 60%;
    padding: 20px 0px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const CardTitle = styled.div`
  text-align: center;
  padding: 50px 0px 0px 0px;

  @media ${device.desktop} {
    padding: 0px;
  }

  h2 {
    font-family: ${fonts.mindenmas};
    font-size: 15px;
    color: ${colors.cimek};
    letter-spacing: 2px;
  }

  p {
    font-family: ${fonts.mindenmas};
    padding: 20px;
  }
`;

export const GoToTopButton = styled.button`
  outline: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  padding: 20px;
  background: none;
`;

export const Button = styled(NavLink)`
  border: 2px solid #1f1f1f;;
  background: transparent;
  color: ${colors.cimek};
  height: 42px;
  width: 220px;
  letter-spacing: 1.5px;
  padding: 20px;
  text-transform: uppercase;
  font-family: ${fonts.mindenmas};
  margin: 0 auto;
  width: 190px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 14px;



  &:hover {
    background: #1f1f1f;;
    color: ${colors.tortfeher};
    transition: 0.6s;
  }

  a:visited {
    color: #1f1f1f;;
  }

  a:visited:hover {
    color: ${colors.tortfeher};
  }
`;

export const ButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column;
`;
