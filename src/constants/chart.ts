import { DateTime } from 'luxon';

import { ICandleChart } from '../types/index.ts';

export const COLORS = {
  up: 'rgba(80, 160, 115, 1)',
  down: 'rgba(215, 85, 65, 1)',
  unchanged: 'rgba(90, 90, 90, 1)',
};

const barCount = 31;
const initialDateStr = '01 Oct 2023 10:15 Z';

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomBar(date: DateTime, lastClose: number) {
  const open = +randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
  const close = +randomNumber(open * 0.95, open * 1.05).toFixed(2);
  const high = +randomNumber(Math.max(open, close), Math.max(open, close) * 1.1).toFixed(2);
  const low = +randomNumber(Math.min(open, close) * 0.9, Math.min(open, close)).toFixed(2);
  return {
    x: date.valueOf(),
    o: open,
    h: high,
    l: low,
    c: close,
  };
}

export function getRandomData(dateStr: string = initialDateStr, count: number = barCount): ICandleChart[] {
  let date = DateTime.fromRFC2822(dateStr);
  const data = [randomBar(date, 30)];
  while (data.length < count) {
    date = date.plus({ days: 1 });
    if (date.weekday <= 5) {
      data.push(randomBar(date, data[data.length - 1].c));
    }
  }

  return data;
}
