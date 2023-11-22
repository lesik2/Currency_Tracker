import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICurrency } from '../../types/index.ts';

export interface CurrenciesState {
  currencies: ICurrency[];
}
const initialState: CurrenciesState = {
  currencies: [],
};
export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrencies: (state, action: PayloadAction<ICurrency[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.currencies = action.payload;
    },
  },
});
export const { setCurrencies } = currenciesSlice.actions;
export default currenciesSlice.reducer;
