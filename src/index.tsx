import 'mapbox-gl/dist/mapbox-gl.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app';
import { ErrorBoundary } from './components/ErrorBoundary/index';
import { store } from './store/index';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,

);
