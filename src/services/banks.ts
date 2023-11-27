import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IResultBanks } from '@customTypes/index';

export const banksAPI = createApi({
  reducerPath: 'banksAPI',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (build) => ({
    fetchBanks: build.query<IResultBanks, string>({
      query: () => ({
        url: './banks.json',
      }),
    }),
  }),
});
export const { useFetchBanksQuery, useLazyFetchBanksQuery } = banksAPI;
