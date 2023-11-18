import 'chartjs-chart-financial';

import { Chart } from 'react-chartjs-2';

import { candles } from '../../constants/index.ts';
import { Wrapper } from './styled.ts';

export function ChartComponent() {
  const data = {
    datasets: [
      {
        label: 'CHRT - Chart.js Corporation',
        data: candles,
        color: {
          up: 'rgba(80, 160, 115, 1)',
          down: 'rgba(215, 85, 65, 1)',
          unchanged: 'rgba(90, 90, 90, 1)',
        },
      },
    ],
  };
  return (
    <Wrapper>
      <Chart data={data} type="candlestick" />
    </Wrapper>
  );
}
