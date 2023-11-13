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
