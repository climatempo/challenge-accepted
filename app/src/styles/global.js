import background from "../assets/bg.svg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
	  margin: 0;
	  padding: 0;
	  outline: 0;
	  box-sizing: border-box;
  }

  body {
	-webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    background: url(${background}) repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  button {
	  cursor: pointer;
  }
`;

export default GlobalStyle;
