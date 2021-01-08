import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--grey);
  }

  :root {
    --header-background: #1765C0;
    --grey: #f7f7f7;
    --light-grey: #EEEEEE;
    --white: #fff;
    --temperature-max: #65A8D1;
    --temperature-min: #D16060;
    --default-text: #000;
  };
`;
