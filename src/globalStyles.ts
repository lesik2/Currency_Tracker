import { createGlobalStyle } from 'styled-components';

import poppinsLight from './assets/fonts/Poppins-Light.ttf';
import poppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import poppinsBold from './assets/fonts/Poppins-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: ${(props) => props.theme.fonts.bold};
      src: url(${poppinsBold}) format('truetype');
      font-display: swap;
    }
    @font-face {
      font-family: ${(props) => props.theme.fonts.regular};
      src: url(${poppinsRegular}) format('truetype');
      font-display: swap;
    }
    @font-face {
      font-family: ${(props) => props.theme.fonts.light};
      src: url(${poppinsLight}) format('truetype');
      font-display: swap;
    }
    *, *::before,*::after {
      box-sizing: border-box;
    }
    body{
      font-family: ${(props) => props.theme.fonts.light}; 
      margin: 0;
      padding: 0;
      width: 100%;
      transition: background-color 0.2s;
      background-color: ${(props) => props.theme.colors.primary};
      position: relative;
  
    }
    img,
    video,
    iframe {
      display: block;
      max-width: 100%;
    }
    a {
      cursor: pointer;
      color: inherit;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
    a:active{
      text-decoration: none;
    }
    a:hover{
      text-decoration: none;
    }
    a:visited{
      text-decoration: none;
    }
    ol, ul {
      list-style: none;
    }
    p {
      margin: 0;
      padding: 0;
    }
`;
export default GlobalStyle;
