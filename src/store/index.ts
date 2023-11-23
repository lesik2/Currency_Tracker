import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { banksAPI } from '../services/banks';
import { currencyAPI } from '../services/currencyService';
import { searchAPI } from '../services/search';
import appReducer from './reducers/appSlice';
import currenciesReducer from './reducers/currenciesSlice';

const rootReducer = combineReducers({
  [currencyAPI.reducerPath]: currencyAPI.reducer,
  appReducer,
  [searchAPI.reducerPath]: searchAPI.reducer,
  [banksAPI.reducerPath]: banksAPI.reducer,
  currenciesReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line arrow-body-style
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      currencyAPI.middleware,
      searchAPI.middleware,
      banksAPI.middleware,
    );
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
