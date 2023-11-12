import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ROUTES } from './app/index.tsx';
import { DateUpdate } from './components/DateUpdate/index.tsx';
import { DropDown } from './components/DropDown/index.tsx';
import { Footer } from './components/Footer/index.tsx';
import { Header } from './components/Header/index.tsx';
import { CODES_NAMES } from './constants/index.ts';
import GlobalStyle from './globalStyles.ts';
import { useTheme } from './hooks/theme.ts';

export function App() {
  const theme = useTheme();
  const [value, setValue] = useState('Select currency');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <DateUpdate />
        <DropDown value={value} setValue={setValue} lists={CODES_NAMES} initialValue="Select currency" />
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
