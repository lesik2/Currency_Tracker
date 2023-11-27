import australianDollarIcon from '@assets/images/australianDollarIcon.svg';
import bitcoinIcon from '@assets/images/bitcoinIcon.svg';
import bovespalIcon from '@assets/images/bovespaIcon.svg';
import canadianDollarIcon from '@assets/images/canadianDollarIcon.svg';
import dollarIcon from '@assets/images/dollarIcon.svg';
import euroIcon from '@assets/images/euroIcon.svg';
import facebookIcon from '@assets/images/facebookIcon.svg';
import ifixIcon from '@assets/images/ifix.svg';
import instagramIcon from '@assets/images/instagramIcon.svg';
import libraIcon from '@assets/images/libraIcon.svg';
import linkedinIcon from '@assets/images/linkedin.svg';
import pesoArgentinoIcon from '@assets/images/pesoArgentinoIcon.svg';
import telegramIcon from '@assets/images/telegramIcon.svg';
import twitterIcon from '@assets/images/twitterIcon.svg';
import wonIcon from '@assets/images/wonIcon.svg';
import yenIcon from '@assets/images/yenIcon.svg';
import { Bar, ICode, ICurrencyCard, TYPE_CODES, IResultBanks, IResultCurrencySearch } from '@customTypes/index';

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
  PHONE_COMPANY: '+44-789-987-6543',
  EMAIL_COMPANY: 'currency.tracker@gmail.com',
  CONTACT_COMPANY: 'Contact Us',
  COMPANY_ADDRESS: '456 Oak Avenue, Gomel, 246001',
  BUTTON_CHART: 'Open modal',
  CREATE_CHART: 'Create chart',
  RANDOM_DATA: 'Get random data',
  ERROR_MESSAGE_BAR: 'The coordinates should be numbers l(min) h(max)',
  SNACK_BAR_MESSAGE: 'The chart was built successfully',
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
  morning: 'AM',
  evening: 'PM',
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
export const CODES_NAMES: TYPE_CODES[] = [
  'USD',
  'EUR',
  'JPY',
  'KRW',
  'ARS',
  'LRD',
  'AUD',
  'CAD',
  'BTC',
];
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
export const CONTACTS = [
  {
    id: 1,
    icon: facebookIcon,
    name: 'facebook',
  },
  {
    id: 2,
    icon: instagramIcon,
    name: 'instagram',
  },
  {
    id: 3,
    icon: linkedinIcon,
    name: 'linkedin',
  },
  {
    id: 4,
    icon: twitterIcon,
    name: 'twitter',
  },
  {
    id: 5,
    icon: telegramIcon,
    name: 'telegram',
  },

];
export const BarCoordinates: Bar[] = ['o', 'c', 'l', 'h'];
export const BANKS_DATA: IResultBanks = {
  banks: [
    {
      id: 1,
      name: 'Беларусбанк',
      latitude: 53.902159,
      longitude: 27.561411,
    },
    {
      id: 2,
      name: 'Белагропромбанк',
      latitude: 53.917927,
      longitude: 27.564939,
    },
    {
      id: 3,
      name: 'БПС-Сбербанк',
      latitude: 53.904741,
      longitude: 27.551311,
    },
    {
      id: 4,
      name: 'Приорбанк',
      latitude: 53.913612,
      longitude: 27.562185,
    },
    {
      id: 5,
      name: 'БелВЭБ',
      latitude: 53.894289,
      longitude: 27.590720,
    },
  ],
};
export const SEARCH_DATA: IResultCurrencySearch = {
  currencies: [
    {
      nameOfCurrency: 'Commercial Dollar',
      id: 21,
    },
    {
      nameOfCurrency: 'Euro',
      id: 22,
    },
    {
      nameOfCurrency: 'Yen',
      id: 23,
    },
    {
      nameOfCurrency: 'Yuan',
      id: 24,
    },
    {
      nameOfCurrency: 'Argentine Pesco',
      id: 25,
    },
    {
      nameOfCurrency: 'Libra',
      id: 26,
    },
    {
      nameOfCurrency: 'Australian Dollar',
      id: 27,
    },
    {
      nameOfCurrency: 'Canadian Dollar',
      id: 28,
    },
    {
      nameOfCurrency: 'Bitcoin',
      id: 29,
    },
    {
      nameOfCurrency: 'IFIX',
      id: 30,
    },
    {
      nameOfCurrency: 'Bovespa Index',
      id: 31,
    },
  ],

};
