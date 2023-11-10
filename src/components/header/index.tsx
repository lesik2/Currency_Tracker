import { NavLink } from 'react-router-dom';

import { LINKS_NAMES, PATHS } from '../../app/index.tsx';
import Label from '../../assets/images/label.svg';
import { ToggleTheme } from '../ToggleTheme/index.tsx';
import {
  HeaderImage,
  HeaderText,
  HeaderWrapper,
  LabelImage,
  LinkText, MainTitle, Navigation, SecondTitle, Wrapper, WrapperInfo, WrapperLabel, WrapperTitles,
} from './styled.ts';

export function Header() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderImage alt="label chart" src={Label} />
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
      </HeaderWrapper>
      <WrapperLabel>
        <WrapperInfo>
          <WrapperTitles>
            <MainTitle>
              Modsen Currency
            </MainTitle>
            <SecondTitle>
              Tracker
            </SecondTitle>
          </WrapperTitles>
          <HeaderText>
            Quotes for the dollar and other
            international currencies.
          </HeaderText>
        </WrapperInfo>
        <LabelImage alt="label chart" src={Label} />
      </WrapperLabel>
    </Wrapper>
  );
}
