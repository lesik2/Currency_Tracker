import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ROUTES } from './app/index';
import { DateUpdate } from './components/DateUpdate/index';
import { Footer } from './components/Footer/index';
import { Header } from './components/Header/index';
import GlobalStyle from './globalStyles';
import { useCurrency } from './hooks/useCurrency';
import { useTheme } from './hooks/useTheme';
import { useFetchLatestCurrenciesQuery } from './services/currencyService';
import { getParametersForCurrencies } from './utils/index';

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
              <Route
                key={route.path}
                index={route.index || false}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>

  );
}
