import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IResultCurrencySearch } from '../types/index.ts';

export const searchAPI = createApi({
  reducerPath: 'elasticSearchAPI',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'search.json' }),
  endpoints: (build) => ({
    fetchCurrenciesNames: build.query<IResultCurrencySearch, string>({
      query: () => ({
        url: '',
      }),
    }),
  }),
});
export const { useFetchCurrenciesNamesQuery, useLazyFetchCurrenciesNamesQuery } = searchAPI;
