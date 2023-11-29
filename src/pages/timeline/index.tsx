import 'chartjs-adapter-luxon';

import Chart from 'chart.js/auto';
import {
  CandlestickController, CandlestickElement, OhlcController, OhlcElement,
} from 'chartjs-chart-financial';
import React from 'react';

import { ChartComponent } from '@components/ChartComponent/index';
import { CurrencyPicker } from '@components/CurrencyPicker/index';
import { SnackBar } from '@components/SnackBar/index';
import { Observer } from '@model/observer';
import { ITimeLine, TimeLineState } from '@customTypes/chart';
import { TimeLineSection } from './styled';

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export class Timeline extends React.Component<ITimeLine, TimeLineState> {
  private observer: Observer;

  constructor(props: ITimeLine) {
    super(props);
    this.observer = new Observer();
    this.addToObserver = this.addToObserver.bind(this);
  }

  addToObserver(data: boolean): void {
    this.observer.setData(data);
  }

  override render() {
    return (
      <TimeLineSection data-cy="timeline">
        <CurrencyPicker />
        <ChartComponent addToObserver={this.addToObserver} />
        <SnackBar observer={this.observer} />
      </TimeLineSection>
    );
  }
}
