import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { currencyAPI } from '../services/currencyService.ts';

const rootReducer = combineReducers({
  [currencyAPI.reducerPath]: currencyAPI.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyAPI.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
