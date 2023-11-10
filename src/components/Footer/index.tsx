import Label from '../../assets/images/label.svg';
import { FOOTER_INFO, STATIC_INFO } from '../../constants/index.ts';
import {
  FooterInfo,
  FooterInfoText,
  FooterInfoTitle,
  FooterInfoWrapper,
  FooterText,
  FooterWrapper, LogoDescription, LogoFooter, LogoText, LogoWrapper, Wrapper,
} from './styled.ts';

export function Footer() {
  return (
    <FooterWrapper>
      <Wrapper>
        <LogoWrapper>
          <LogoFooter alt="label chart" src={Label} />
          <LogoText>
            {STATIC_INFO.NAME_COMPANY}
            {' '}
            {STATIC_INFO.NAME_APP}
          </LogoText>
        </LogoWrapper>
        <LogoDescription>
          {STATIC_INFO.FOOTER_DESCRIPTION}
        </LogoDescription>
      </Wrapper>
      <FooterInfoWrapper>
        {FOOTER_INFO.map((item) => (
          <FooterInfo>
            <FooterInfoTitle>
              {item.title}
            </FooterInfoTitle>
            <FooterInfoText>
              {item.optionFirst}
            </FooterInfoText>
            <FooterInfoText>
              {item.optionSecond}
            </FooterInfoText>
          </FooterInfo>
        ))}
      </FooterInfoWrapper>
      <FooterText>
        {STATIC_INFO.FOOTER_TEXT}
      </FooterText>
    </FooterWrapper>
  );
}
