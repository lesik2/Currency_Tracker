import React from 'react';
import { Observer } from '@model/observer';

export interface IPaths {
  path: string;
  index: boolean;
  element: React.ReactElement;
}
export interface ICode {
  name: string;
  icon: string;
}
export type TYPE_CODES =
  | 'USD'
  | 'EUR'
  | 'JPY'
  | 'KRW'
  | 'ARS'
  | 'LRD'
  | 'AUD'
  | 'CAD'
  | 'BTC'
  | 'IFIX'
  | 'BOVI';
export interface ICurrency {
  code: TYPE_CODES;
  value: number;
}
export interface IModal {
  onClose: () => void;
  children: React.ReactElement;
}
export interface IModalContext {
  nameCard: string;
  valueOfBase: number;
}
export interface ISearchForm {
  handleChange: (value: string) => void;
}
export interface ICurrencySearch {
  nameOfCurrency: string;
  id: number;
}
export interface IElasticSearch {
  list: ICurrencySearch[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (value: string) => void;
}
export interface IResultCurrencySearch {
  currencies: ICurrencySearch[];
}
export interface IBank {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}
export interface IResultBanks {
  banks: IBank[];
}
export interface IDropDown {
  lists: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<TYPE_CODES>>;
}
export interface ICurrencyCard {
  code: TYPE_CODES;
  value: number;
  isStock?: boolean;
}
export interface IResultCurrencies {
  meta: { ['last_updated_at']: string };
  data: {
    [currencyCode: string]: ICurrency;
  };
}
export interface ICandleChart {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
}
export interface IBar {
  o: string;
  h: string;
  l: string;
  c: string;
}
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
export interface ITimeLine{

}
export interface TimeLineState {
  search: string;
}
export interface IObserver {
  update(data: boolean): void;
}
export interface IChartComponent{
  addToObserver: (data: boolean) => void;
}
export interface IChartContext{
  barData: IBar[];
  setBarData: React.Dispatch<React.SetStateAction<IBar[]>>
  addToObserver: (data: boolean) => void;
  setResult: React.Dispatch<React.SetStateAction<ICandleChart[]>>;
  handleClose: () => void;
}
export type Bar = keyof IBar;
export interface IBarInput{
  bar: IBar;
  handleChange: (value: string, index: number, key: Bar) => void;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}
export interface ISnackBar{
  observer: Observer;
}
export interface SnackBarState {
  data: boolean;
}
