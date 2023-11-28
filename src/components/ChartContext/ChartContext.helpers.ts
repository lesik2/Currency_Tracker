import { IBar, ICandleChart } from '@customTypes/chart';
import { INITIAL_DATA } from '@constants/chart';

export const covertDataForChart = (barData: IBar[]): ICandleChart[] => {
  const resultData: ICandleChart[] = [];
  let date = new Date(INITIAL_DATA).getTime();
  for (let i = 0; i < barData.length; i += 1) {
    resultData.push({
      x: date,
      c: parseFloat(barData[i].c),
      h: parseFloat(barData[i].h),
      l: parseFloat(barData[i].l),
      o: parseFloat(barData[i].o),
    });
    date += 86400000;
  }

  return resultData;
};
