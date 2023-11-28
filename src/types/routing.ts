import { ReactElement } from 'react';
import { LINKS_NAMES, PATHS_NAMES } from '@constants/routes';

export interface IPaths {
  path: string;
  index: boolean;
  element: ReactElement;
}
export type TypePathsNames = typeof PATHS_NAMES[keyof typeof PATHS_NAMES]
export type TypePathForLinkNames = Record<
  TypePathsNames,
  typeof LINKS_NAMES[number]
>
