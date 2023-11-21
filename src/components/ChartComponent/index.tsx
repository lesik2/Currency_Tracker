import 'chartjs-chart-financial';

import { useState } from 'react';
import { Chart } from 'react-chartjs-2';

import { COLORS, getRandomData } from '../../constants/chart.ts';
import { IBar, ICandleChart } from '../../types/index.ts';
import { BarInput } from '../BarInput/index.tsx';
import { useThemeChart } from './hooks/useThemeChart.ts';
import {
  ChartBtn, Wrapper, WrapperBtn, WrapperChart,
} from './styled.ts';

export interface IChartComponent{
  notifyAll: (data: boolean)=>void;
}
export function ChartComponent({ notifyAll }:IChartComponent) {
  const barCount = 31;
  const [barData, setBarData] = useState<IBar[]>(new Array(barCount).fill({
    o: '',
    h: '',
    l: '',
    c: '',
  }));
  const [result, setResult] = useState<ICandleChart[]>([]);
  const [isError, setIsError] = useState(false);

  const options = useThemeChart();
  const dataForChart = {
    datasets: [
      {
        label: 'Chart.js',
        data: result,
        color: COLORS,
        borderColor: COLORS as object,
        borderWidth: 2,
      },
    ],
  };
  const handleChange = (value:string, index: number, key: keyof IBar) => {
    setBarData(barData.map((bar, currentIndex) => {
      if (currentIndex === index) {
        return { ...bar, [key]: value };
      }
      return bar;
    }));
  };
  const handleCreateChart = () => {
    const resultData:ICandleChart[] = [];
    const initialDateStr = '01 Oct 2023 10:15 Z';
    let date = new Date(initialDateStr).getTime();
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
    notifyAll(true);
    setResult(resultData);
  };
  const handleGetRandomValues = () => {
    const data = getRandomData();
    setBarData(barData.map((_bar, index) => ({
      o: data[index].o.toString(),
      h: data[index].h.toString(),
      l: data[index].l.toString(),
      c: data[index].c.toString(),
    })));
  };
  const validateResult = () => {
    if (isError) {
      return true;
    }
    for (let i = 0; i < barData.length; i += 1) {
      if (barData[i].c === '' || barData[i].o === '' || barData[i].l === '' || barData[i].h === '') {
        return true;
      }
    }
    return false;
  };
  return (
    <Wrapper>
      {barData.map((bar, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <BarInput key={index} bar={bar} handleChange={handleChange} setIsError={setIsError} id={index} />
      ))}
      <WrapperBtn>
        <ChartBtn onClick={handleCreateChart} disabled={validateResult()}>
          Create chart
        </ChartBtn>
        <ChartBtn onClick={handleGetRandomValues}>
          Get random data
        </ChartBtn>
      </WrapperBtn>
      <WrapperChart>
        <Chart data={dataForChart} type="candlestick" options={options} />
      </WrapperChart>
    </Wrapper>
  );
}
