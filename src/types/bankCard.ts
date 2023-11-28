import { Dispatch, SetStateAction } from 'react';

export interface ISearchForm {
  handleChange: (value: string) => void;
}
export interface ICurrencySearch {
  nameOfCurrency: string;
  id: number;
}
export interface IElasticSearch {
  list: ICurrencySearch[];
  setShow: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<string>>;
  handleChange: (value: string) => void;
}
export interface IResultCurrencySearch {
  currencies: ICurrencySearch[];
}
export interface IBank {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}
export interface IResultBanks {
  banks: IBank[];
}
