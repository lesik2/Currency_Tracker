import { Dispatch, SetStateAction } from 'react';

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
export interface IDropDown {
  lists: string[];
  value: string;
  setValue: Dispatch<SetStateAction<TYPE_CODES>>;
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
export interface ICode {
  name: string;
  icon: string;
}
