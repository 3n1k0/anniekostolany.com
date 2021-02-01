import { createGlobalStyle } from "styled-components";
import { fonts, colors } from "./config";

const GlobalStyle = createGlobalStyle`

html {
  
} 

  body {
    margin: 0;
    padding: 0;
    overscroll-behavior-y: none;
    letter-spacing: 0.5px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    line-height: 50px;
    font-style: normal;
    color: rgb(88, 86, 86);


  }
    h1, h2, h3, h4, h5, h6 {
    font-family: 'Prata', serif;
    }

p{
      font-size: 22px; 
}

  *{
    box-sizing: border-box;
    text-decoration: none;

    
  }
`;

export default GlobalStyle;
