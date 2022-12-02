import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
   }

   body {
      background-color: ${({ theme }) => theme.colors['base-background']};
      color: ${({ theme }) => theme.colors['base-text']};

      font-family: 'Roboto', sans-serif;
      
     -webkit-font-smoothing: antialiased;
   } 
   
   input, button {
      border: 0
   }

   button {
      cursor: pointer;
   }
`;
