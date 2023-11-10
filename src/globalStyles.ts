/* eslint-disable import/no-unresolved */
import poppinsLight from '@assets/fonts/Poppins-Light.ttf';
import poppinsRegular from '@assets/fonts/Poppins-Regular.ttf';
import poppinsBold from '@assets/fonts/Poppins-SemiBold.ttf';
import { createGlobalStyle } from 'styled-components';
import {} from 'styled-components/cssprop';

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
      font-family: ${(props) => props.theme.fonts.regular};
      src: url(${poppinsLight}) format('truetype');
      font-display: swap;
    }
    *, *::before,*::after {
      box-sizing: border-box;
    }
    body{
      font-family: ${(props) => props.theme.fonts.regular};
      margin: ${(props) => props.theme.margin.m0};
      padding: ${(props) => props.theme.padding.p0};
      width: 100%;
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
      text-decoration: inherit;
      -webkit-tap-highlight-color: transparent;
    }
    ol, ul {
      list-style: none;
    }
    p {
      margin: ${(props) => props.theme.margin.m0};
      padding: ${(props) => props.theme.padding.p0};
    }
`;
export default GlobalStyle;
