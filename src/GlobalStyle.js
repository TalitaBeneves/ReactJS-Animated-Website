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
    font-size: 16px;
    font-weight: 400; 
    color: white; 
  }

  a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
  }

  p{
    line-height: 2rem;
  }
`;

export default GlobalStyle;