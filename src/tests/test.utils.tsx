import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore, EmptyObject, EnhancedStore, PreloadedState } from '@reduxjs/toolkit';

import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import type { RootState } from '@store/index';
import appReducer from '@store/reducers/appSlice';
import currenciesReducer from '@store/reducers/currenciesSlice';
import { lightTheme } from '@constants/theme';

type ReducerTypes = Pick<RootState, 'appReducer'|'currenciesReducer'>;
type TStore = EnhancedStore<ReducerTypes>;

type CustomRenderOptions = {
    preloadedState?: PreloadedState<ReducerTypes & EmptyObject>;
    store?: TStore;
} & Omit<RenderOptions, 'wrapper'>;

function render(ui: ReactElement, options?: CustomRenderOptions) {
  const store =
        options?.store ||
        configureStore({
          reducer: combineReducers({
            appReducer,
            currenciesReducer,
          }),
        });

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          {children}
        </ThemeProvider>
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { render };
