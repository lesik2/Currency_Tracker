import 'chartjs-adapter-luxon';

import Chart from 'chart.js/auto';
import {
  CandlestickController, CandlestickElement, OhlcController, OhlcElement,
} from 'chartjs-chart-financial';

import { ChartComponent } from '../../components/ChartComponent/index.tsx';
import { TimeLineSection } from './styled.ts';

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);
export function Timeline() {
  return (
    <TimeLineSection>
      <ChartComponent />
    </TimeLineSection>
  );
}
