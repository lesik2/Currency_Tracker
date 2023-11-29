import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IResultBanks } from '@customTypes/bankCard';

export const banksAPI = createApi({
  reducerPath: 'banksAPI',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: './banks.json' }),
  endpoints: (build) => ({
    fetchBanks: build.query<IResultBanks, string>({
      query: () => ({
        url: '',
      }),
    }),
  }),
});
export const { useFetchBanksQuery, useLazyFetchBanksQuery } = banksAPI;
