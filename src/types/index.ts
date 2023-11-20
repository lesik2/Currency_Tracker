import React from 'react';

export interface IPaths {
  path?: string;
  index?: boolean;
  component: React.ReactElement;
}
export interface ICode {
  name: string;
  icon: string;
}
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
  code: string;
}
export interface ISearchForm {
  handleChange: (value: string) => void;
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
export interface ICurrencySearch {
  nameOfCurrency: string;
  id: number;
}
export interface IDropDown {
  lists: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export type TYPE_CODES = 'USD' | 'EUR' | 'JPY' | 'KRW' | 'ARS' | 'LRD' | 'AUD' | 'CAD' | 'BTC' | 'IFIX' | 'BOVI';
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
export interface IConvertCurrencies {
  value: string;
  base_currency: string;
  currencies: string;
}
export interface ICandleChart {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
}
