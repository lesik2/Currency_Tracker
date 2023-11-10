import { Outlet } from 'react-router-dom';

import Header from '../components/header/index.tsx';

function RootLayout() {
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
export default RootLayout;
