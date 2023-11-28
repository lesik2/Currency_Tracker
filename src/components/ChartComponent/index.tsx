import 'chartjs-chart-financial';

import { useState } from 'react';
import { Chart } from 'react-chartjs-2';

import { IBar, ICandleChart, IChartComponent } from '@customTypes/chart';
import { COLORS, BAR_COUNT } from '@constants/chart';
import { STATIC_INFO } from '@constants/index';
import { useThemeChart } from './hooks/useThemeChart';
import { ChartBtn, Wrapper, WrapperChart } from './styled';
import { ChartContext } from '../ChartContext/index';
import { Modal } from '../Modal/index';

export function ChartComponent({ addToObserver }: IChartComponent) {
  const [result, setResult] = useState<ICandleChart[]>([]);
  const [barData, setBarData] = useState<IBar[]>(new Array(BAR_COUNT).fill({
    o: '',
    h: '',
    l: '',
    c: '',
  }));
  const [isOpen, setIsOpen] = useState(false);
  const options = useThemeChart();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const dataForChart = {
    datasets: [
      {
        label: 'Chart.js',
        data: result,
        color: COLORS,
        borderColor: COLORS,
        borderWidth: 2,
      },
    ],
  };

  return (
    <Wrapper data-testid="chart-component">
      <ChartBtn data-cy="button-chart" data-testid="button-chart" onClick={handleOpen}>
        {STATIC_INFO.BUTTON_CHART}
      </ChartBtn>
      <WrapperChart>
        <Chart data={dataForChart} type="candlestick" options={options} />
      </WrapperChart>
      {isOpen && (
      <Modal onClose={handleClose}>
        <ChartContext
          barData={barData}
          setBarData={setBarData}
          setResult={setResult}
          addToObserver={addToObserver}
          handleClose={handleClose}
        />
      </Modal>
      )}
    </Wrapper>

  );
}
