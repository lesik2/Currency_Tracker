import 'chartjs-adapter-luxon';

import Chart from 'chart.js/auto';
import {
  CandlestickController, CandlestickElement, OhlcController, OhlcElement,
} from 'chartjs-chart-financial';
import React from 'react';

import { ChartComponent } from '../../components/ChartComponent/index.tsx';
import { CurrencyPicker } from '../../components/CurrencyPicker/index.tsx';
import { SnackBar } from '../../components/SnackBar/index.tsx';
import { Observer } from '../../model/observer.ts';
import { TimeLineSection } from './styled.ts';

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export interface ITimeLine{

}
export interface TimeLineState {
  search: string;
}
export class Timeline extends React.Component<ITimeLine, TimeLineState> {
  private observer: Observer;

  constructor(props:ITimeLine) {
    super(props);
    this.observer = new Observer();
    this.notifyAll = this.notifyAll.bind(this);
  }

  notifyAll(data: boolean) {
    console.log(data);
    this.observer.setData(data);
  }

  override render() {
    return (
      <TimeLineSection>
        <CurrencyPicker />
        <ChartComponent notifyAll={this.notifyAll} />
        <SnackBar observer={this.observer} />
      </TimeLineSection>
    );
  }
}
