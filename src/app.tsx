import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { ROUTES } from './app/index.tsx';
import { Header } from './components/Header/index.tsx';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {ROUTES.map((route) => (
            <Route index={route.index || false} path={route.path} element={route.component} />
          ))}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
