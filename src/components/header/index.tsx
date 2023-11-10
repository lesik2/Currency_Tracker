import { NavLink } from 'react-router-dom';

import { LINKS_NAMES, PATHS } from '../../app/index.tsx';
import Label from '../../assets/images/label.svg';
import { ToggleTheme } from '../ToggleTheme/index.tsx';
import {
  LabelImage,
  LinkText, Navigation, Wrapper,
} from './styled.ts';

export function Header() {
  return (
    <Wrapper>
      <LabelImage alt="label chart" src={Label} />
      <Navigation>
        {PATHS.map((path, index) => (
          <NavLink to={path}>
            <LinkText>
              {LINKS_NAMES[index]}
            </LinkText>
          </NavLink>
        ))}
      </Navigation>
      <ToggleTheme />
    </Wrapper>
  );
}
