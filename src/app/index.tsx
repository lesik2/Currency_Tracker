import { NotFound } from '../components/NotFound/index';
import { BankCard } from '../pages/BankCard/index';
import { Contact } from '../pages/Contact/index';
import { Home } from '../pages/Home/index';
import { Timeline } from '../pages/Timeline/index';
import { IPaths } from '../types/index';

export const LINKS_NAMES = ['Home', 'Timeline', 'Bank card', 'Contato'];
export const PATHS_NAMES = {
  home: '/',
  timeline: '/timeline',
  bankCard: '/bankcard',
  contact: '/contact',
};
export const PATHS_FOR_LINK_NAMES = {
  [PATHS_NAMES.home]: LINKS_NAMES[0],
  [PATHS_NAMES.timeline]: LINKS_NAMES[1],
  [PATHS_NAMES.bankCard]: LINKS_NAMES[2],
  [PATHS_NAMES.contact]: LINKS_NAMES[3],
};
export const PATHS = Object.values(PATHS_NAMES);
export const ROUTES: Readonly<IPaths[]> = [
  {
    path: PATHS_NAMES.home,
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
