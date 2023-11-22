import styled from 'styled-components';

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 86px;
  padding: 0px 5px 0px 5px;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    gap: 33px;
  }
`;
export const Title = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 32px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 41px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 57px;
    height: 2px;
    width: 520px;
    background: ${(props) => props.theme.colors.cardGray};
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      &::after {
        width: 450px;
      }
      margin-left: 15px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    &::after {
        width: 350px;
      }
      font-size: 22px;
      margin-left: 15px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    &::after {
        width: 310px;
      }
      font-size: 19px;
      margin-left: 0px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  width: 1224px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      width: 100%;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(520px, 100%), 1fr));
  column-gap: 184px;
  justify-items: center;
  row-gap: 56px;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      column-gap: 80px;
      grid-template-columns: repeat(auto-fit, minmax(min(450px, 100%), 1fr));
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      column-gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    row-gap: 20px;
  }
`;
