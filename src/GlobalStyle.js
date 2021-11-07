import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  body{
    background-color: #03091f;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;  
  }
`;

export default GlobalStyle;