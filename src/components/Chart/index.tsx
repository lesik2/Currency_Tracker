/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import 'chartjs-adapter-luxon';

import Chart, { ChartConfiguration, ChartOptions } from 'chart.js/auto';
import {
  CandlestickController, CandlestickElement, OhlcController, OhlcElement,
} from 'chartjs-chart-financial';
import { useEffect, useRef } from 'react';

import { candles } from '../../constants/index.ts';
import { Wrapper } from './styled.ts';

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

Chart.defaults.borderColor = '#ffffff';
Chart.defaults.color = '#FFF';

export function ChartComponent() {
  const chartRef = useRef<HTMLCanvasElement| null>(null);
  const chartOptions: ChartOptions<'candlestick'> = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          display: false,
        },
        title: {
          display: true,
          text: 'Day',
          font: {
            size: 16,
            weight: 'bold',
          },
          align: 'end',
          color: '#FFF',
          padding: {
            top: 35,
          },
        },
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.10)',
          lineWidth: 1,
        },
      },
      y: {
        type: 'linear',
        beginAtZero: true,
        display: true,
        title: {
          display: true,
          text: 'Value',
          align: 'end',
          font: {
            size: 16,
            weight: 'bold',
          },
          color: '#FFF',
        },
        ticks: {
          display: true,
          color: '#FFF',
          font: {
            size: 12,
            weight: 'normal',
          },
          padding: 10,
        },
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.10)',
          lineWidth: 1,
        },
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      colors: {
        forceOverride: true,
      },
    },
  };
  useEffect(() => {
    if (!chartRef.current) return;

    const data = {
      datasets: [
        {
          label: 'Candle',
          data: candles,
          borderWidth: 2,
        },
      ],
    };
    const config: ChartConfiguration<'candlestick'> = {
      type: 'candlestick',
      options: chartOptions,
      data,
    };
    const myChart = new Chart(chartRef.current, config);
    return () => {
      myChart.destroy();
    };
  }, []);
  return (
    <Wrapper>
      <canvas ref={chartRef} />
    </Wrapper>
  );
}
