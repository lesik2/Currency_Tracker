import React, { useState } from 'react';

import {
  ChartBtn, Wrapper, WrapperBtn, WrapperInputs,
} from './styled';
import { getRandomData } from '../../constants/chart';
import { IBar, ICandleChart } from '../../types/index';
import { BarInput } from '../BarInput/index';

export interface IChartContext{
  barData: IBar[];
  setBarData: React.Dispatch<React.SetStateAction<IBar[]>>
  notifyAll: (data: boolean) => void;
  setResult: React.Dispatch<React.SetStateAction<ICandleChart[]>>;
  handleClose: () => void;
}
export function ChartContext({
  barData, setBarData, notifyAll, setResult, handleClose,
}: IChartContext) {
  const [isError, setIsError] = useState(false);
  const handleChange = (value: string, index: number, key: keyof IBar) => {
    setBarData(barData.map((bar, currentIndex) => {
      if (currentIndex === index) {
        return { ...bar, [key]: value };
      }
      return bar;
    }));
  };
  const handleCreateChart = () => {
    const resultData: ICandleChart[] = [];
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
    handleClose();
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
      <WrapperInputs>
        {barData.map((bar, index) => (
          <BarInput
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            bar={bar}
            handleChange={handleChange}
            setIsError={setIsError}
            id={index}
          />
        ))}
      </WrapperInputs>
      <WrapperBtn>
        <ChartBtn onClick={handleCreateChart} disabled={validateResult()}>
          Create chart
        </ChartBtn>
        <ChartBtn onClick={handleGetRandomValues}>
          Get random data
        </ChartBtn>
      </WrapperBtn>
    </Wrapper>
  );
}
