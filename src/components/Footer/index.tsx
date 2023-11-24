import {
  FooterInfo,
  FooterInfoText,
  FooterInfoTitle,
  FooterInfoWrapper,
  FooterText,
  FooterWrapper, LogoDescription, LogoFooter, LogoText, LogoWrapper, Wrapper,
} from './styled';
import Label from '../../assets/images/label.svg';
import { FOOTER_INFO, STATIC_INFO } from '../../constants/index';

export function Footer() {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <Wrapper>
          <LogoFooter alt="label chart" src={Label} />
          <LogoText>
            {STATIC_INFO.NAME_COMPANY}
            {' '}
            {STATIC_INFO.NAME_APP}
          </LogoText>
        </Wrapper>
        <LogoDescription>
          {STATIC_INFO.FOOTER_DESCRIPTION}
        </LogoDescription>
      </LogoWrapper>
      <FooterInfoWrapper>
        {FOOTER_INFO.map((item) => (
          <FooterInfo key={item.title}>
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
