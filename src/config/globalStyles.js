import { createGlobalStyle } from "styled-components";
import { device } from "./mediaquery";

const GlobalStyle = createGlobalStyle`

html {
} 

  body {
    margin: 0;
    padding: 0;
    overscroll-behavior-y: none;
    letter-spacing: 0.5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-style: normal;
    color: rgb(100, 100, 100);


  }
    h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', serif;
    }

    h2{
      font-size: 20px;
      letter-spacing: 1px;
    }

p{
      font-size: 16px; 

      @media ${device.desktop}{
        font-size: 18px; 
      }
}

  *{
    box-sizing: border-box;
    text-decoration: none;

    
  }

  button:focus {outline:0;}
`;

export default GlobalStyle;
