import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        color: ${({ theme }) => theme.colors.dark};
        background: ${({ theme }) => theme.colors.light};
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
    }

    .bg-primary {
        background-color: ${({ theme }) => theme.colors.primary}!important;
    }

    .f-light {
        font-weight: 300 !important;

        > strong {
            font-weight: 700 !important;
        }
    }

    @media (max-width: 1199px) and (min-width: 992px) {
        .break-fix {
            width: 50% !important;
        }
    }
`;

export default GlobalStyles;
