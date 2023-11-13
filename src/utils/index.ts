import { CODES_NAMES } from '../constants/index.ts';

const ADDITIONAL_PARAMS = 'currencies[]=';
export const getParametersForCurrencies = () => {
  const convert = CODES_NAMES.map((name, index) => {
    if (index === 0) {
      return `?${ADDITIONAL_PARAMS}${name}`;
    }
    return ADDITIONAL_PARAMS + name;
  });
  return convert.join('&');
};
export const ROUND_UP_CURRENCY = (value: number) => Math.round(value * 100000) / 100000;
