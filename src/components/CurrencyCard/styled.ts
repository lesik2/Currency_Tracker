import styled from 'styled-components';

export const WrapperCard = styled.div`
  display: flex;
  width: 520px;
  padding: 30px 27px 30px 32px;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.cardGray};
  background-color: ${(props) => props.theme.colors.lightBlack};
  cursor: pointer;
  transition:
    transform 0.3s,
    border-radius 0.3s;
  &:hover {
    transform: scale(1.05);
    border-radius: 20px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      width: 450px;
      padding: 15px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      width: 350px;
      padding: 15px;
      gap: 20px;
    &:hover {
      transform: scale(1.05);
      border-radius: 10px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      width: 310px;
      padding: 13px;
      gap: 17px;
    &:hover {
      transform: scale(1.05);
      border-radius: 10px;
    }
  }
`;
export const CardIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    width: 40px;
    height: 40px;
  }
`;
export const WrapperTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

`;
export const CardTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.darkWhite};
  font-size: 35px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 49px;
  margin: 0;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      font-size: 28px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 20px;
      line-height: 20px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      font-size: 18px;
      line-height: 18px;
  }
`;
export const CardSubTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.light};
  color: ${(props) => props.theme.colors.gray};
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: 32px;
  line-height: 41px;
  font-style: normal;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      font-size: 25px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 18px;
      line-height: 18px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      font-size: 16px;
      line-height: 16px;
  }
`;
