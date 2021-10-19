import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  div#root {
    height: 100%;
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }
`;

