import { CODES_NAMES } from '@constants/currency';

const ADDITIONAL_PARAMS = 'currencies[]=';
export const getParametersForCurrencies = (): string => {
  const convert = CODES_NAMES.map((name, index) => {
    if (index === 0) {
      return `?${ADDITIONAL_PARAMS}${name}`;
    }

    return ADDITIONAL_PARAMS + name;
  });

  return convert.join('&');
};

export const roundUpCurrency = (value: number): number => Math.round(value * 100000) / 100000;
