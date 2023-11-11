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
  code: string;
  value: number;
}
export interface IResultCurrencies {
  meta: { lastUpdateDate: string };
  data: {
    [currencyCode: string]: ICurrency;
  };
}
