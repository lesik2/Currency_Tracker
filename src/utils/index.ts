import { CODES_NAMES } from '../constants/index.ts';
import { IBank } from '../types/index.ts';

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
export const generateRandomBanks = (banks: IBank[]) => {
  const randomBanks: IBank[] = [];
  const numberOfBanks = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < numberOfBanks; i += 1) {
    const randomIndex = Math.floor(Math.random() * banks.length);
    randomBanks.push(banks[randomIndex]);
  }

  return randomBanks;
};
