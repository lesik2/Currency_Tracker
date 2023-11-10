import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './constants/index.ts';
import GlobalStyle from './globalStyles.ts';
import App from './main.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,

);
