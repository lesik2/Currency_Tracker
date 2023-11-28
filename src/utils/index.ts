import { CODES_NAMES } from '@constants/index';
import { IBank } from '@customTypes/index';

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
export const generateRandomBanks = (banks: IBank[]): IBank[] => {
  const randomBanks: IBank[] = [];
  const bankIds: Set<number> = new Set();
  const numberOfBanks = Math.floor(Math.random() * 3) + 1;

  while (randomBanks.length < numberOfBanks) {
    const randomIndex = Math.floor(Math.random() * banks.length);
    const randomBank = banks[randomIndex];

    if (!bankIds.has(randomBank.id)) {
      randomBanks.push(randomBank);
      bankIds.add(randomBank.id);
    }
  }

  return randomBanks;
};
