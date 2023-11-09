import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import NotFound from './components/notFound/index.tsx';
import RootLayout from './layouts/index.tsx';
import BankCard from './pages/bankCard/index.tsx';
import Contact from './pages/contact/index.tsx';
import Home from './pages/home/index.tsx';
import Timeline from './pages/timeline/index.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="bankcard" element={<BankCard />} />
      <Route path="contact" element={<Contact />} />
      <Route path="timeline" element={<Timeline />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
