import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        cursor: none;
    }
    
    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #FFF;
        height: 100vh;
        font-family: 'Space Grotesk', sans-serif;
    }

    p,
    h1 {
        margin:0;
        padding: 0;
    }
`
export default GlobalStyle