import { createGlobalStyle } from "styled-components";
import { fonts, colors } from "./config";

const GlobalStyle = createGlobalStyle`

html {
  
} 

  body {
    margin: 0;
    padding: 0;
    overscroll-behavior-y: none;
    font-family: ${fonts.main};
    letter-spacing: 0.5px;

  }


  *{
    box-sizing: border-box;
    text-decoration: none;

    
  }

`;

export default GlobalStyle;
