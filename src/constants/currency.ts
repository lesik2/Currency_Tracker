import australianDollarIcon from '@assets/images/australianDollarIcon.svg';
import bitcoinIcon from '@assets/images/bitcoinIcon.svg';
import bovespalIcon from '@assets/images/bovespaIcon.svg';
import canadianDollarIcon from '@assets/images/canadianDollarIcon.svg';
import dollarIcon from '@assets/images/dollarIcon.svg';
import euroIcon from '@assets/images/euroIcon.svg';
import ifixIcon from '@assets/images/ifix.svg';
import libraIcon from '@assets/images/libraIcon.svg';
import pesoArgentinoIcon from '@assets/images/pesoArgentinoIcon.svg';
import wonIcon from '@assets/images/wonIcon.svg';
import yenIcon from '@assets/images/yenIcon.svg';

import { ICode, ICurrencyCard, TYPE_CODES } from '@customTypes/currency';

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
