import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    padding: 20px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    padding: 10px;
  }
`;
export const WrapperBtn = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const WrapperInputs = styled.div`
  overflow-y: scroll;
  scrollbar-width: thin;
  padding-top: 15px;
  height: 550px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
    height: 450px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    height: 400px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    height: 350px;
  }
`;
export const ChartBtn = styled.button`
  width: 140px;
  cursor: pointer;
  padding: 7px 5px 7px 5px;
  border-radius: 10px;
  border: ${(props) => props.theme.colors.cardGray};
  outline: none;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.footerGray};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverBtn};
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    padding: 5px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    width: 135px;
  }
`;
