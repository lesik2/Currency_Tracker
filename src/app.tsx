import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header } from '@components/Header/index';
import { DateUpdate } from '@components/DateUpdate/index';
import { Footer } from '@components/Footer/index';
import { useCurrency } from '@hooks/useCurrency';
import { useTheme } from '@hooks/useTheme';
import { useFetchLatestCurrenciesQuery } from '@services/currencyService';
import { getParametersForCurrencies } from '@utils/currency';
import { ROUTES } from '@constants/routes';
import GlobalStyle from './globalStyles';

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
                {...route}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>

  );
}
