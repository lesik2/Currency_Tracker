import 'chartjs-chart-financial';

import { useMemo, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import { COLORS, getRandomData } from '../../constants/chart.ts';
import { ICandleChart } from '../../types/index.ts';
import { useThemeChart } from './hooks/useThemeChart.ts';
import { Wrapper, WrapperChart } from './styled.ts';

export function ChartComponent() {
  const options = useThemeChart();
  const [barCount] = useState(31);
  const barData: ICandleChart[] = useMemo(() => getRandomData(undefined, barCount), [barCount]);
  const dataForChart = {
    datasets: [
      {
        label: 'Chart.js',
        data: barData,
        color: COLORS,
        borderColor: COLORS as object,
        borderWidth: 2,
      },
    ],
  };
  return (
    <Wrapper>
      <WrapperChart>
        <Chart data={dataForChart} type="candlestick" options={options} />
      </WrapperChart>
    </Wrapper>
  );
}
