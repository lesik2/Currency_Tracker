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
