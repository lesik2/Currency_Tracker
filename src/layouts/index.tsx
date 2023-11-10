import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header/index.tsx';

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
