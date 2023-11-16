import { CODES_NAMES } from '../constants/index.ts';
import { IBank, ICandle } from '../types/index.ts';

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
export const roundUpCurrency = (value: number) => Math.round(value * 100000) / 100000;
export const generateRandomBanks = (banks: IBank[]) => {
  const randomBanks: IBank[] = [];
  const numberOfBanks = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < numberOfBanks; i += 1) {
    const randomIndex = Math.floor(Math.random() * banks.length);
    randomBanks.push(banks[randomIndex]);
  }

  return randomBanks;
};
export const generateCandles = (startDate: string, amountOfDays: number) => {
  const dataPoints: ICandle[] = [];
  const lowest = 2.5;
  const highest = 9.4;

  const currentDate = new Date(startDate);

  for (let i = 0; i < amountOfDays; i += 1) {
    const open = getRandomValue(lowest, highest);
    const close = getRandomValue(lowest, highest);
    const high = Math.max(open, close, getRandomValue(open, highest));
    const low = Math.min(open, close, getRandomValue(lowest, open));

    const dataPoint = {
      x: currentDate.getTime(),
      o: open,
      h: Math.max(open, close, high),
      l: low,
      c: close,
    };

    dataPoints.push(dataPoint);

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dataPoints;
};

function getRandomValue(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
