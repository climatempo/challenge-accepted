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

        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary-color: #E0E0E0;
        --secondary-color: #fff;
        --color-blue-100:  #2B8BC6;
        --color-blue-200:  #1565C0;
        --color-red-100:   #CA3A3A;


        font-size: 62.5%;
    }
 
`
