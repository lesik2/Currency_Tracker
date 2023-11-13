import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { LINKS_NAMES, PATHS } from '../../app/index.tsx';
import Label from '../../assets/images/label.svg';
import { STATIC_INFO } from '../../constants/index.ts';
import { ToggleTheme } from '../ToggleTheme/index.tsx';
import {
  HeaderImage,
  HeaderText,
  HeaderWrapper,
  LabelImage,
  LinkText, MainTitle, Navigation, SecondTitle, Wrapper, WrapperInfo, WrapperLabel, WrapperTitles,
} from './styled.ts';

export function Header() {
  const [active, setActive] = useState('');
  const handleClick = (event: React.MouseEvent) => {
    const nameOfLink = event.currentTarget.getAttribute('data-name');
    if (nameOfLink) {
      setActive(nameOfLink);
    }
  };
  return (
    <HeaderWrapper>
      <Wrapper>
        <HeaderImage alt="label chart" src={Label} />
        <Navigation>
          {PATHS.map((path, index) => (
            <NavLink key={path} to={path}>
              <LinkText data-name={LINKS_NAMES[index]} $isActive={active === LINKS_NAMES[index]} onClick={handleClick}>
                {LINKS_NAMES[index]}
              </LinkText>
            </NavLink>
          ))}
        </Navigation>
        <ToggleTheme />
      </Wrapper>
      <WrapperLabel>
        <WrapperInfo>
          <WrapperTitles>
            <MainTitle>
              {STATIC_INFO.NAME_COMPANY}
            </MainTitle>
            <SecondTitle>
              {STATIC_INFO.NAME_APP}
            </SecondTitle>
          </WrapperTitles>
          <HeaderText>
            {STATIC_INFO.HEADER_TEXT}
          </HeaderText>
        </WrapperInfo>
        <LabelImage alt="label chart" src={Label} />
      </WrapperLabel>
    </HeaderWrapper>
  );
}
