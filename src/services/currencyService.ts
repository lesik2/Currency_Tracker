import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IResultCurrencies } from '../types/index';

export const currencyAPI = createApi({
  reducerPath: 'currencyAPI',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.currencyapi.com/v3/' }),
  endpoints: (build) => ({
    fetchLatestCurrencies: build.query<IResultCurrencies, string>({
      query: (param: string) => ({
        url: `/latest${param}`,
        headers: {
          apikey: process.env.CURRENCY_APY_KEY,
        },
      }),
    }),
  }),
});
export const {
  useFetchLatestCurrenciesQuery,
  useLazyFetchLatestCurrenciesQuery,
} = currencyAPI;
