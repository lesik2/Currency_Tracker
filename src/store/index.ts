import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { banksAPI } from '../services/banks.ts';
import { currencyAPI } from '../services/currencyService.ts';
import { searchAPI } from '../services/search.ts';
import appReducer from './reducers/appSlice.ts';

const rootReducer = combineReducers({
  [currencyAPI.reducerPath]: currencyAPI.reducer,
  appReducer,
  [searchAPI.reducerPath]: searchAPI.reducer,
  [banksAPI.reducerPath]: banksAPI.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyAPI.middleware, searchAPI.middleware, banksAPI.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
