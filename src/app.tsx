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
import { useTheme } from './hooks/useTheme.ts';

export function App() {
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
