import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        outline: 0;
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        
        button {
            cursor: pointer;
        }

    }

    :root {
        --primary-color: #E0E0E0;
        --secondary-color: #fff;
        --color-blue-100:  #2B8BC6;
        --color-blue-200:  #1565C0;
        --color-red-100:   #CA3A3A;
        --color-gray-100:  #f5f5f5;
        --color-gray-200:  #e0e0e0;

        --primary-text-color: #000;
        --secondary-text-color:  #828282;


        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: var(--primary-color);
    }
 
`
