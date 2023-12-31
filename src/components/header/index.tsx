import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Wrapper>
        <BurgerWrapper>
          <HeaderImage alt="label chart" src={Label} />
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </BurgerWrapper>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
          <NavigationComponent />
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
