import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 56px 0px 56px 0px;
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 14px;
  }
`;
export const TextDate = styled.time`
  margin: 0;
  color: ${(props) => props.theme.colors.darkWhite};
  font-size: 33px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 41px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
    font-size: 23px;
    line-height: 23px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    font-size: 18px;
  }
`;
export const DateImage = styled.img`
  width: 50px;
  height: 52px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      width: 35px;
      height: 37px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      width: 28px;
      height: 30px;
  }
`;
