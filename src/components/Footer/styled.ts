import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 96px 127px 40px 113px;
  display: flex;
  align-items: flex-start;
  position: relative;
  gap: 105px;
`;
export const FooterText = styled.h3`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.footerGray};
  font-size: 24px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 36px;
  font-family: ${(props) => props.theme.fonts.regular};
  margin: 0;
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 10px 0px 70px 0px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 17px;
  align-items: flex-end;
`;
export const LogoFooter = styled.img`
  width: 40px;
  height: 45px;
`;
export const LogoText = styled.h2`
  font-family: ${(props) => props.theme.fonts.bold};
  background: ${(props) => props.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin: 0;
  font-style: normal;
  line-height: normal;
  font-size: 26px;
`;
export const LogoDescription = styled.p`
  width: 482px;
  height: 228px;
  color: ${(props) => props.theme.colors.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 36px;
  font-size: 24px;
`;
export const FooterInfoWrapper = styled.div`
  display: flex;
  gap: 125px;
  align-items: center;
`;
export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;
export const FooterInfoTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 28px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-style: normal;
  line-height: 42px;
  color: ${(props) => props.theme.colors.secondary};
`;
export const FooterInfoText = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-size: 24px;
  color: ${(props) => props.theme.colors.footerGray};
  line-height: normal;
  font-style: normal;
`;
