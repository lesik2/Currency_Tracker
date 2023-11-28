import { NavLink } from 'react-router-dom';
import React from 'react';
import { LINKS_NAMES, PATHS } from '@app/index';
import { LinkText, Navigation } from './styled';

export interface INavigationComponent{
  handleClick: (event: React.MouseEvent) => void;
  active: string;
}
export function NavigationComponent({ handleClick, active }: INavigationComponent) {
  return (
    <Navigation data-testid="navigation">
      {PATHS.map((path, index) => (
        <NavLink key={path} to={path}>
          <LinkText
            data-name={LINKS_NAMES[index]}
            $isActive={active === LINKS_NAMES[index]}
            onClick={handleClick}
          >
            {LINKS_NAMES[index]}
          </LinkText>
        </NavLink>
      ))}
    </Navigation>
  );
}
