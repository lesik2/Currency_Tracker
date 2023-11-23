import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 90px 30px 80px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    padding: 90px 10px 80px 10px;
  }
`;
export const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.colors.darkWhite};
  font-size: 35px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: 41px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 28px;
    line-height: 30px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 24px;
    line-height: 25px;
  }
`;
export const MainContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin-top: 90px;
  margin-bottom: 40px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    gap: 80px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 60px;
  }
`;
export const WrapperContact = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  gap: 10px;
`;
export const NameOfContact = styled.h3`
  margin: 0;
  font-size: 25px;
  color: ${(props) => props.theme.colors.footerGray};
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 21px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    font-size: 17px;
  }
`;
export const ContactInfo = styled.h3`
  margin: 0;
  font-size: 22px;
  background: ${(props) => props.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 18px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    font-size: 15px;
  }
`;
export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  margin-top: 70px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    gap: 40px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    gap: 20px;
    margin-top: 45px;
  }
`;
export const Icon = styled.img`
  width: 60px;
  height: 60px;
  filter: invert(100%) sepia(36%) saturate(4407%) hue-rotate(16deg) brightness(93%) contrast(88%);
  cursor: pointer;
  transition: transform 0.3s;
  &:hover{
    transform: scale(1.15)
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    width: 35px;
    height: 35px;
  }
`;
