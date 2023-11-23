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
          apikey: 'cur_live_CC8BfcQDPOX1OOPPyB9vWn0r8DWWrPnorBOzZM4b',
        },
      }),
    }),
  }),
});
export const {
  useFetchLatestCurrenciesQuery,
  useLazyFetchLatestCurrenciesQuery,
} = currencyAPI;
