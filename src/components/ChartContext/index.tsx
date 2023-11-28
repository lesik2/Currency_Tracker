import { useState } from 'react';

import { IBar, ICandleChart, IChartContext } from '@customTypes/chart';
import { getRandomData, INITIAL_DATA } from '@constants/chart';
import { STATIC_INFO } from '@constants/index';
import {
  ChartBtn, Wrapper, WrapperBtn, WrapperInputs,
} from './styled';
import { BarInput } from '../BarInput/index';

export function ChartContext({
  barData, setBarData, addToObserver, setResult, handleClose,
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
  const isValidInput = () => {
    if (isError) {
      return false;
    }
    for (let i = 0; i < barData.length; i += 1) {
      if (barData[i].c === '' || barData[i].o === '' || barData[i].l === '' || barData[i].h === '') {
        return false;
      }
    }

    return true;
  };
  const handleCreateChart = () => {
    if (!isValidInput()) return;
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
    addToObserver(true);
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

  return (
    <Wrapper data-cy="chart-model" data-testid="chart-model">
      <WrapperInputs data-cy="chart-inputs">
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
        <ChartBtn onClick={handleCreateChart} disabled={!isValidInput()}>
          {STATIC_INFO.CREATE_CHART}
        </ChartBtn>
        <ChartBtn onClick={handleGetRandomValues}>
          {STATIC_INFO.RANDOM_DATA}
        </ChartBtn>
      </WrapperBtn>
    </Wrapper>
  );
}
