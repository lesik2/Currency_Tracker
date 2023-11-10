import { NotFound } from '../components/NotFound/index.tsx';
import { BankCard } from '../pages/BankCard/index.tsx';
import { Contact } from '../pages/Contact/index.tsx';
import { Home } from '../pages/Home/index.tsx';
import { Timeline } from '../pages/Timeline/index.tsx';
import { IPaths } from '../types/index.ts';

export const LINKS_NAMES = ['Home', 'Timeline', 'Bank card', 'Contato'];

const PATHS_NAMES = {
  home: '/',
  timeline: 'timeline',
  bankCard: 'bankcard',
  contact: 'contact',
};
export const PATHS = Object.values(PATHS_NAMES);
export const ROUTES: Readonly<IPaths[]> = [
  {
    index: true,
    component: <Home />,
  },
  {
    path: PATHS_NAMES.bankCard,
    component: <BankCard />,
  },
  {
    path: PATHS_NAMES.contact,
    component: <Contact />,
  },
  {
    path: PATHS_NAMES.timeline,
    component: <Timeline />,
  },
  {
    path: '*',
    component: <NotFound />,
  },
] as const;
