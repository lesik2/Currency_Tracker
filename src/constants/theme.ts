import { ITheme } from '../types';

export const theme = {
  fontFamily: {
    serif: ['Times', 'Times New Roman', 'Georgia', 'serif'],
  },
  fonts: {
    bold: 'bold',
    regular: 'regular',
    light: 'light',
  },

  fontWeight: {
    light: '300',
    normal: '400',
    regular: '500',
    medium: '600',
  },
  zIndex: {
    modal: 1000,
    elasticSearch: 1000,
    burgerMenu: 1000,
    burgerMenuBack: 900,
    burgerBtn: 2000,
  },
  breakPoints: {
    laptop: 1250,
    laptopS: 990,
    tablet: 705,
    mobileL: 560,
    mobile: 415,
  } as const,
};
export const lightTheme: ITheme = {
  ...theme,
  colors: {
    secondary: '#030304',
    darkWhite: '#030304',
    gray: '#030304',
    footerGray: '#898989',
    primary: '#f2f2f2',
    primaryGradient: 'linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
    secondaryGradient: 'linear-gradient(45deg, #f2f2f2 7%, rgb(0, 206, 44, 0.3) 45%,#f2f2f2 95%)',
    lightBlack: '#e6e6e6',
    cardGray: '#474747',
    modalWrapper: 'rgba(0, 0, 0, 0.7)',
    dropDown: '#f2f2f2',
    hover: '#D9D9D9',
    inputText: '#030304',
    inputBack: '#e6e6e6',
    error: '#ff0000',
    loader: '#00CE2C',
    chartGrid: '#D9D9D9',
    hoverBtn: '#D9D9D9',
  },
};
export const darkTheme: ITheme = {
  ...theme,
  colors: {
    secondary: '#FFF',
    darkWhite: '#D9D9D9',
    gray: '#A7B2C3',
    footerGray: '#898989',
    primary: '#030304',
    primaryGradient: 'linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
    secondaryGradient:
      'linear-gradient(45deg, #030304 22%, rgba(36, 121, 64, 0.4) 45%,#030304 89%)',
    lightBlack: '#202025',
    cardGray: '#474747',
    modalWrapper: 'rgba(0, 0, 0, 0.7)',
    dropDown: '#f2f2f2',
    hover: '#D9D9D9',
    inputText: '#9E9E9E',
    inputBack: '#1B2028',
    error: '#ff0000',
    loader: '#00CE2C',
    chartGrid: 'rgba(255, 255, 255, 0.10)',
    hoverBtn: '#474747',
  },
};
