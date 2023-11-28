import { NotFound } from '@components/NotFound/index';
import { BankCard } from '@pages/BankCard/index';
import { Contact } from '@pages/Contact/index';
import { Home } from '@pages/Home/index';
import { Timeline } from '@pages/Timeline/index';
import { IPaths } from '@customTypes/index';

export const LINKS_NAMES = ['Home', 'Timeline', 'Bank card', 'Contato'] as const;
export const PATHS_NAMES = {
  home: '/',
  timeline: '/timeline',
  bankCard: '/bankcard',
  contact: '/contact',
} as const;
export type TypePathForLinkNames = Record<
  typeof PATHS_NAMES[keyof typeof PATHS_NAMES],
  typeof LINKS_NAMES[number]
>
export const PATHS_FOR_LINK_NAMES: TypePathForLinkNames = Object.values(PATHS_NAMES).reduce(
  (acc, path, index) => ({
    ...acc,
    [path]: LINKS_NAMES[index],
  }),
  {} as TypePathForLinkNames,
);
export const PATHS = Object.values(PATHS_NAMES);
export const ROUTES: Readonly<IPaths[]> = [
  {
    path: PATHS_NAMES.home,
    index: true,
    element: <Home />,
  },
  {
    path: PATHS_NAMES.bankCard,
    index: false,
    element: <BankCard />,
  },
  {
    path: PATHS_NAMES.contact,
    index: false,
    element: <Contact />,
  },
  {
    path: PATHS_NAMES.timeline,
    index: false,
    element: <Timeline />,
  },
  {
    path: '*',
    index: false,
    element: <NotFound />,
  },
] as const;
