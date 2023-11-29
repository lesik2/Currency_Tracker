export interface ITheme {
  fontFamily: {
    serif: string[];
  };
  fonts: {
    bold: string;
    regular: string;
    light: string;
  };
  fontWeight: {
    light: string;
    normal: string;
    regular: string;
    medium: string;
  };
  zIndex: {
    modal: number;
    elasticSearch: number;
    burgerMenu: number;
    burgerBtn: number;
    burgerMenuBack: number;
  };
  breakPoints: {
    laptop: number;
    laptopS: number;
    tablet: number;
    mobile: number;
    mobileL: number;
  }
  colors: {
    secondary: string;
    darkWhite: string;
    gray: string;
    footerGray: string;
    primary: string;
    primaryGradient: string;
    secondaryGradient: string;
    lightBlack: string;
    cardGray: string;
    modalWrapper: string;
    dropDown: string;
    hover: string;
    inputText: string;
    inputBack: string;
    error: string;
    loader: string;
    chartGrid: string;
    hoverBtn: string;
  };
}
