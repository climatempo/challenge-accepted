import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  html, body, div#root {
    height: 100vh;
    width: 100vw;
    overflow-x: auto;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
