import { Dispatch, SetStateAction } from 'react';
import { Observer } from '@model/observer';

export interface IBar {
  o: string;
  h: string;
  l: string;
  c: string;
}
export type Bar = keyof IBar;

export interface ICandleChart {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
}
export interface IChartContext{
  barData: IBar[];
  setBarData: Dispatch<SetStateAction<IBar[]>>
  addToObserver: (data: boolean) => void;
  setResult: Dispatch<SetStateAction<ICandleChart[]>>;
  handleClose: () => void;
}
export interface IBarInput{
  bar: IBar;
  handleChange: (value: string, index: number, key: Bar) => void;
  setIsError: Dispatch<SetStateAction<boolean>>;
  id: number;
}
export interface ITimeLine{

}
export interface TimeLineState {
  search: string;
}

export interface IObserver {
  update(data: boolean): void;
}
export interface IChartComponent{
  addToObserver: (data: boolean) => void;
}

export interface ISnackBar{
  observer: Observer;
}
export interface SnackBarState {
  data: boolean;
}
