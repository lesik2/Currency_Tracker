import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IResultCurrencySearch } from '@customTypes/index';

export const searchAPI = createApi({
  reducerPath: 'searchAPI',
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
