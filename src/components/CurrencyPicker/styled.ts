import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 125px;
  align-self: flex-start;
  align-items: flex-start;
  margin-bottom: 76px;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    margin-bottom: 50px;
    align-self: center;
  }

`;
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    gap: 6px;
  }

`;
export const IconCurrency = styled.img`
  width: 80px;
  height: 80px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    width: 40px;
    height: 40px;
  }
`;
export const NameOfCurrencyText = styled.h3`
  font-size: 35px;
  color: ${(props) => props.theme.colors.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 49px;
  margin: 0;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 25px;
    line-height: 30px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 22px;
    line-height: 18px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    font-size: 17px;
  }
`;
export const CodeOfCurrencyText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-style: normal;
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    font-size: 14px;
  }
`;
