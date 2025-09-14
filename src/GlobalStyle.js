import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap" rel="stylesheet');

  body {
    // font-family: 'Carter One' ,'Roboto', Arial, sans-serif;
    font-family: "Carter One", system-ui;
    font-weight: 400;
    font-style: normal;
  }
`;

export default GlobalStyle;