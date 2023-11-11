import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IResultCurrencies } from '../types/index.ts';

export const currencyAPI = createApi({
  reducerPath: 'currencyAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.currencyapi.com/v3/' }),
  endpoints: (build) => ({
    fetchLatestCurrencies: build.query<IResultCurrencies, string>({
      query: (param: string) => ({
        url: `/latest${param}`,
        headers: {
          apikey: 'cur_live_RHvricND7GsGNPrOAViBTCRCfeDWA97jwzNIyDf3',
        },
      }),
    }),
  }),
});
export const { useFetchLatestCurrenciesQuery, useLazyFetchLatestCurrenciesQuery } = currencyAPI;
