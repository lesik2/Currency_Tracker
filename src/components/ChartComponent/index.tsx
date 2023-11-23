import 'chartjs-chart-financial';

import { useState } from 'react';
import { Chart } from 'react-chartjs-2';

import { COLORS } from '../../constants/chart';
import { IBar, ICandleChart } from '../../types/index';
import { ChartContext } from '../ChartContext/index';
import { Modal } from '../Modal/index';
import { useThemeChart } from './hooks/useThemeChart';
import { ChartBtn, Wrapper, WrapperChart } from './styled';

export interface IChartComponent{
  notifyAll: (data: boolean)=>void;
}
export function ChartComponent({ notifyAll }:IChartComponent) {
  const barCount = 31;
  const [result, setResult] = useState<ICandleChart[]>([]);
  const [barData, setBarData] = useState<IBar[]>(new Array(barCount).fill({
    o: '',
    h: '',
    l: '',
    c: '',
  }));
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
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
  return (
    <Wrapper>
      <ChartBtn onClick={handleOpen}>
        Open modal
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
          notifyAll={notifyAll}
          handleClose={handleClose}
        />
      </Modal>
      )}
    </Wrapper>

  );
}
