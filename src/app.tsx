import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { ROUTES } from './app/index.tsx';
import { Footer } from './components/Footer/index.tsx';
import { Header } from './components/Header/index.tsx';
import { store } from './store/index.ts';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.path} index={route.index || false} path={route.path} element={route.component} />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>

  );
}
