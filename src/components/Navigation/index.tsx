import { NavLink } from 'react-router-dom';
import { LINKS_NAMES, PATHS } from '@constants/routes';
import { LinkText, Navigation } from './styled';

export interface INavigationComponent{
  active: string;
}
export function NavigationComponent({ active }: INavigationComponent) {
  return (
    <Navigation data-testid="navigation">
      {PATHS.map((path, index) => (
        <NavLink key={path} to={path}>
          <LinkText
            $isActive={active === LINKS_NAMES[index]}
            area-current={active ? 'page' : ''}
          >
            {LINKS_NAMES[index]}
          </LinkText>
        </NavLink>
      ))}
    </Navigation>
  );
}
