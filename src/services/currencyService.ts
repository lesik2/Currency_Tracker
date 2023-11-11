import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICurrency, IResultCurrencies } from '../types/index.ts';

export const currencyAPI = createApi({
  reducerPath: 'currencyAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.currencyapi.com/v3/' }),
  endpoints: (build) => ({
    fetchLatestCurrencies: build.query<ICurrency[], string>({
      query: (param: string) => ({
        url: '/latest',
        headers: {
          apikey: 'cur_live_RHvricND7GsGNPrOAViBTCRCfeDWA97jwzNIyDf3',
        },
        params: {
          something: param,
        },
        transformResponse: (response: IResultCurrencies) => Object.values(response.data),
      }),
    }),
  }),
});
export const { useFetchLatestCurrenciesQuery, useLazyFetchLatestCurrenciesQuery } = currencyAPI;
