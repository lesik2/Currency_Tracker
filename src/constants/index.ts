/* eslint-disable max-len */
import { FinancialDataPoint } from 'chart.js';

import australianDollarIcon from '../assets/images/australianDollarIcon.svg';
import bitcoinIcon from '../assets/images/bitcoinIcon.svg';
import bovespalIcon from '../assets/images/bovespaIcon.svg';
import canadianDollarIcon from '../assets/images/canadianDollarIcon.svg';
import dollarIcon from '../assets/images/dollarIcon.svg';
import euroIcon from '../assets/images/euroIcon.svg';
import ifixIcon from '../assets/images/ifix.svg';
import libraIcon from '../assets/images/libraIcon.svg';
import pesoArgentinoIcon from '../assets/images/pesoArgentinoIcon.svg';
import wonIcon from '../assets/images/wonIcon.svg';
import yenIcon from '../assets/images/yenIcon.svg';
import { ICode, ICurrencyCard } from '../types/index.ts';
import { generateCandles } from '../utils/index.ts';

export const STATIC_INFO = {
  NAME_COMPANY: 'Modsen Currency',
  NAME_APP: 'Tracker',
  HEADER_TEXT: 'Quotes for the dollar and other international currencies.',
  FOOTER_DESCRIPTION:
    // eslint-disable-next-line max-len
    "Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.",
  FOOTER_TEXT: 'Startsup © 2023-2024, All Rights Reserved',
  LAST_UPDATE: 'Last updated at',
  STOCKS: 'Stocks',
  QUOTES: 'Quotes',
  DROP_DOWN: 'Select currency',
  ERROR_MESSAGE: 'Input should be a number (e.g. 12)',
  INPUT_PLACEHOLDER: 'Сurrency search...',
  FORM_SEARCH: 'Search currency in the bank',
};
export const REGULAR_EXPRESSIONS = {
  validateInput: /^[0-9]*[.,]?[0-9]+$/,
};
export const FOOTER_INFO = [
  {
    title: 'General',
    optionFirst: 'Market',
    optionSecond: 'Service',
  },
  {
    title: 'Product',
    optionFirst: 'Sparks',
    optionSecond: 'Snaps',
  },
  {
    title: 'Community',
    optionFirst: 'Ideas',
    optionSecond: 'Streams',
  },
];
export const CURRENCY_ICONS = {
  dollarIcon,
  yenIcon,
  wonIcon,
  pesoArgentinoIcon,
  libraIcon,
  australianDollarIcon,
  canadianDollarIcon,
  ifixIcon,
  bitcoinIcon,
  bovespalIcon,
  euroIcon,
};
export const DOLLAR_SYMBOL = '$';
export const PERCENTAGE_SYMBOL = '%';
export const STOCKS: ICurrencyCard[] = [
  {
    code: 'IFIX',
    value: 0.15,
    isStock: true,
  },
  {
    code: 'BOVI',
    value: 0.15,
    isStock: true,
  },
];
export const Times = {
  morning: 'PM',
  evening: 'AM',
  break: 12,
};
export const CODE_CURRENCY: Record<string, ICode> = {
  USD: {
    name: 'Commercial Dollar',
    icon: CURRENCY_ICONS.dollarIcon,
  },
  EUR: {
    name: 'Euro',
    icon: CURRENCY_ICONS.euroIcon,
  },
  JPY: {
    name: 'Yen',
    icon: CURRENCY_ICONS.yenIcon,
  },
  KRW: {
    name: 'Yuan',
    icon: CURRENCY_ICONS.wonIcon,
  },
  ARS: {
    name: 'Argentine Pesco',
    icon: CURRENCY_ICONS.pesoArgentinoIcon,
  },
  LRD: {
    name: 'Libra',
    icon: CURRENCY_ICONS.libraIcon,
  },
  AUD: {
    name: 'Australian Dollar',
    icon: CURRENCY_ICONS.australianDollarIcon,
  },
  CAD: {
    name: 'Canadian Dollar',
    icon: CURRENCY_ICONS.canadianDollarIcon,
  },
  BTC: {
    name: 'Bitcoin',
    icon: CURRENCY_ICONS.bitcoinIcon,
  },
  IFIX: {
    name: 'IFIX',
    icon: CURRENCY_ICONS.ifixIcon,
  },
  BOVI: {
    name: 'Bovespa Index',
    icon: CURRENCY_ICONS.bovespalIcon,
  },
};
export const CODES_NAMES = ['USD', 'EUR', 'JPY', 'KRW', 'ARS', 'LRD', 'AUD', 'CAD', 'BTC'];
export const CURRENCY_NAMES = [
  'Commercial Dollar',
  'IFIX',
  'Bovespa Index',
  'Bitcoin',
  'Canadian Dollar',
  'Australian Dollar',
  'Libra',
  'Argentine Pesco',
  'Yuan',
  'Yen',
  'Euro',
];

const startDate = '2023-06-23T10:15:59Z';
const amountOfDays = 31;

export const candles: FinancialDataPoint[] = generateCandles(startDate, amountOfDays);
