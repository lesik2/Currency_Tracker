import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IConvertCurrencies, ICurrency, IResultCurrencies } from '../types/index';

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
    convertCurrency: build.query<ICurrency[], IConvertCurrencies>({
      query: (param: IConvertCurrencies) => ({
        url: '/latest',
        headers: {
          apikey: 'cur_live_qtVRTmyv41q8m8VGWZkq5ZZNWQylMV2pJEklnvub',
        },
        params: {
          value: param.value,
          base_currency: param.base_currency,
          'currencies[]': param.currencies,
        },
      }),
      transformResponse: (response: IResultCurrencies) => Object.values(response.data),
    }),
  }),
});
export const {
  useFetchLatestCurrenciesQuery,
  useLazyFetchLatestCurrenciesQuery,
  useConvertCurrencyQuery,
  useLazyConvertCurrencyQuery,
} = currencyAPI;
