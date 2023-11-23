import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { LINKS_NAMES, PATHS, PATHS_FOR_LINK_NAMES } from '../../app/index';
import Label from '../../assets/images/label.svg';
import { STATIC_INFO } from '../../constants/index';
import { BurgerMenu } from '../BurgerMenu/index';
import Menu from '../Menu/index';
import { ToggleTheme } from '../ToggleTheme/index';
import {
  BurgerWrapper,
  HeaderImage,
  HeaderText,
  HeaderWrapper,
  LabelImage,
  LinkText, MainTitle, Navigation, SecondTitle, Wrapper, WrapperInfo, WrapperLabel, WrapperTitles,
} from './styled';

export function Header() {
  const location = useLocation();
  const [active, setActive] = useState(PATHS_FOR_LINK_NAMES[location.pathname] || '');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    const nameOfLink = event.currentTarget.getAttribute('data-name');
    if (nameOfLink) {
      setActive(nameOfLink);
      setIsOpen(false);
    }
  };

  return (
    <HeaderWrapper>
      <Wrapper>
        <BurgerWrapper>
          <HeaderImage alt="label chart" src={Label} />
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </BurgerWrapper>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
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
        </Menu>
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
