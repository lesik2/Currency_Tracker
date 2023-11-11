import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ICurrency {
  code: string;
  value: number;
}
export interface IResultCurrencies {
  meta: { lastUpdateDate: string };
  data: {
    [currencyCode: string]: ICurrency;
  };
}
export const currencyAPI = createApi({
  reducerPath: 'currencyAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.currencyapi.com/v3/' }),
  endpoints: (build) => ({
    fetchLatestCurrencies: build.query<IResultCurrencies, string>({
      query: (param: string) => ({
        url: '/latest',
        headers: {
          apikey: 'cur_live_RHvricND7GsGNPrOAViBTCRCfeDWA97jwzNIyDf3',
        },
        params: {
          something: param,
        },
      }),
    }),
  }),
});
export const { useFetchLatestCurrenciesQuery, useLazyFetchLatestCurrenciesQuery } = currencyAPI;
