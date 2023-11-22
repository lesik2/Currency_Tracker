import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
`;
export const Wrapper = styled.section`
  display: flex;
  height: 103px;
  align-items: center;
  justify-content: space-around;
`;
export const HeaderImage = styled.img`
  width: 40px;
  height: 41px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    width: 30px;
    height: 30px;
  }
`;
export const LinkText = styled.p<{ $isActive?: boolean }>`
  font-size: 20px;
  display: block;
  padding: 0px 15px 0px 15px;
  background-color: ${(props) => props.$isActive && props.theme.colors.darkWhite};
  line-height: 41px;
  transition: background-color 0.2s;
  border-radius: 60px;
  color: ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.secondary)};
  font-weight: ${(props) => props.theme.fontWeight.light};
  &:hover {
    background-color: ${(props) => props.theme.colors.darkWhite};
    color: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 16px;
      padding: 0px 10px 0px 10px;
      line-height: 30px;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 115px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      gap: 70px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      gap: 45px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
        flex-direction: column;
        gap: 25px;
    }
`;
export const WrapperLabel = styled.section`
  display: flex;
  margin: 0px 16px 0px 20px;
  background: ${(props) => props.theme.colors.secondaryGradient};
  padding: 33px 0px 59px 46px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      justify-content: center;
      padding: 13px 27px 18px 28px;
      margin: 0px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      justify-content: center;
      padding: 13px 10px 18px 10px;
      margin: 0px;
  }
`;
export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      align-items: center;
      justify-content: center;
  }
`;
export const WrapperTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 64px;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      margin-right: 0px;
      align-items: center;
      justify-content: center;
  }
`;
export const MainTitle = styled.h1`
  font-size: 75px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-family: ${(props) => props.theme.fonts.bold};
  font-style: normal;
  line-height: normal;
  background: ${(props) => props.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  user-select: none;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      font-size: 60px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 40px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      font-size: 30px;
  }
`;
export const SecondTitle = styled.h1`
  font-size: 88px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-family: ${(props) => props.theme.fonts.bold};
  font-style: normal;
  line-height: normal;
  background: ${(props) => props.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: -17px 0px 0px 0px;
  user-select: none;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      font-size: 70px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 50px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      font-size: 35px;
  }
`;
export const HeaderText = styled.p`
  color: ${(props) => props.theme.colors.darkWhite};
  font-size: 25px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 47px;
  text-align: center;
  width: 397px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 20px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    width: 100%;
    font-size: 17px;
    line-height: 30px;
  }
`;
export const LabelImage = styled.img`
  width: 300px;
  height: 312px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
    width: 270px;
    height: 282px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    width: 190px;
    height: 200px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    display: none;
  }
`;
export const BurgerWrapper = styled.div`
    @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 30px 0px 30px;
        width: 100%;
    }
`;
