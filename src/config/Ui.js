import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { colors } from "./config";
import { fonts } from "./config";
import { device } from "./mediaquery";

//checked components

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0px auto;
  pointer-events: none;

  @media ${device.desktop} {
    flex-flow: row nowrap;
    display: flex;
    width: 60%;
    margin: 0 auto;
    padding: 50px 0px;

    p{
      min-width: 300px;

    }
  }
  @media ${device.tablet} {
    width: 70%;

    p{
      min-width: 200px;
    }
  }

  img {
    max-width: 450px;
    min-width: 450px;
    height: 350px;
    object-fit: cover;
    object-position: 80% 78%;
    filter: brightness(103%);
  }
`;


///////// unchecked components 


export const Sharedbox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;

  @media ${device.desktop} {
    width: 60%;
  }
`;

export const CardInnerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  width: 100%;
  color: rgb(88, 86, 86);
  margin-bottom: 50px;

  @media ${device.desktop} {
    padding: 0px 50px;
  }
`;

export const Text = styled.div`
  margin: 0 auto;
  font-family: ${fonts.mindenmas};
  width: 90%;
  color: ${colors.footerfekete};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  padding-bottom: 50px;

  span {
    z-index: 20;
    background: white;
  }

  @media ${device.desktop} {
    width: 60%;
  }

  p {
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
  line-height: 1.5;
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

  p {
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
  font-weight: 800;
`;

export const Button = styled(NavLink)`
  border: 1px solid rgb(133, 82, 89);
  background: rgb(133, 82, 89);
  opacity: 0.7;
  color: white;
  height: 42px;
  width: 200px;
  letter-spacing: 1.5px;
  padding: 20px;
  text-transform: uppercase;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  &:hover {
    background: white;
    color: black;
    border-left: none;
    border-right: none;
    transition: all 0.3s;
  }

  a:visited {
    color: #1f1f1f;
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
