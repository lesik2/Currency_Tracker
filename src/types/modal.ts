import { ReactElement } from 'react';

export interface IModal {
  onClose: () => void;
  children: ReactElement;
}
export interface IModalContext {
  nameCard: string;
  valueOfBase: number;
}
