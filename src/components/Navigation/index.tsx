import { NavLink, useLocation } from 'react-router-dom';
import { LINKS_NAMES, PATHS, PATHS_FOR_LINK_NAMES } from '@constants/routes';
import { TypePathsNames } from '@customTypes/routing';
import { LinkText, Navigation } from './styled';

export function NavigationComponent() {
  const nameOfActiveLink = PATHS_FOR_LINK_NAMES[useLocation().pathname as TypePathsNames];

  return (
    <Navigation data-testid="navigation">
      {PATHS.map((path, index) => (
        <NavLink key={path} to={path}>
          <LinkText
            $isActive={nameOfActiveLink === LINKS_NAMES[index]}
            area-current={nameOfActiveLink ? 'page' : ''}
          >
            {LINKS_NAMES[index]}
          </LinkText>
        </NavLink>
      ))}
    </Navigation>
  );
}
