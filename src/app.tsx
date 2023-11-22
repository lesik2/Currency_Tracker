import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ROUTES } from './app/index.tsx';
import { DateUpdate } from './components/DateUpdate/index.tsx';
import { Footer } from './components/Footer/index.tsx';
import { Header } from './components/Header/index.tsx';
import GlobalStyle from './globalStyles.ts';
import { useCurrency } from './hooks/useCurrency.ts';
import { useTheme } from './hooks/useTheme.ts';
import { useFetchLatestCurrenciesQuery } from './services/currencyService.ts';
import { getParametersForCurrencies } from './utils/index.ts';

export function App() {
  const { data } = useFetchLatestCurrenciesQuery(getParametersForCurrencies(), {
    pollingInterval: 86400000,
  });
  useCurrency(data);
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <DateUpdate />
        <main>
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.path} index={route.index || false} path={route.path} element={route.component} />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>

  );
}
