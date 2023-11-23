import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 96px 127px 40px 113px;
  display: flex;
  align-items: flex-start;
  position: relative;
  gap: 105px;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      gap: 50px;
      padding:96px 60px 40px 60px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      gap: 30px;
      padding:96px 30px 40px 30px;
      justify-content: space-between;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      gap: 35px;
      flex-direction: column;
      padding:96px 15px 5px 15px;
      justify-content: center;
      align-items: center;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    padding:96px 5px 5px 5px;
  }
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
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 16px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      position: static;
      transform: none;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      font-size: 14px;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 10px 0px 70px 0px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      margin: 0px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 17px;
  align-items: flex-end;
  
`;
export const LogoFooter = styled.img`
  width: 40px;
  height: 45px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    width: 30px;
    height: 35px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    width: 27px;
    height: 30px;
  }
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
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 19px;
  }
`;
export const LogoDescription = styled.p`
  width: 482px;
  height: 228px;
  color: ${(props) => props.theme.colors.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 36px;
  font-size: 24px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      font-size: 20px;
      height: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 15px;
      width: 330px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      display: none;
  }
`;
export const FooterInfoWrapper = styled.div`
  display: flex;
  gap: 125px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      gap: 60px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      gap: 40px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      gap: 15px;
      flex-direction: column;
  }
  
`;
export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }
`;
export const FooterInfoTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 28px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-style: normal;
  line-height: 42px;
  color: ${(props) => props.theme.colors.secondary};
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      font-size: 22px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 17px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      margin: 0px;
  }
`;
export const FooterInfoText = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-size: 24px;
  color: ${(props) => props.theme.colors.footerGray};
  line-height: normal;
  font-style: normal;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      gap: 18px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 16px;
  }
`;
