import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PATHS_FOR_LINK_NAMES, TypePathsNames } from '@constants/routes';
import Label from '@assets/images/label.svg';
import { STATIC_INFO } from '@constants/index';
import {
  BurgerWrapper,
  HeaderImage,
  HeaderText,
  HeaderWrapper,
  LabelImage, MainTitle, SecondTitle, Wrapper, WrapperInfo, WrapperLabel, WrapperTitles,
} from './styled';
import { BurgerMenu } from '../BurgerMenu/index';
import Menu from '../Menu/index';
import { ToggleTheme } from '../ToggleTheme/index';
import { NavigationComponent } from '../Navigation';

export function Header() {
  const location = useLocation();
  const [active, setActive] = useState(PATHS_FOR_LINK_NAMES[location.pathname as TypePathsNames]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActive(PATHS_FOR_LINK_NAMES[location.pathname as TypePathsNames]);
  }, [location]);

  return (
    <HeaderWrapper>
      <Wrapper>
        <BurgerWrapper>
          <HeaderImage alt="label chart" src={Label} />
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </BurgerWrapper>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
          <NavigationComponent active={active} />
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
