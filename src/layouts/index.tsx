import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="bankcard">BankCard</NavLink>
          <NavLink to="timeline">Timeline</NavLink>
        </nav>
      </header>
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
