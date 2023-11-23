import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
export const WrapperChart = styled.div`
  width: 95%;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    width: 100%;
  }

`;
export const ChartBtn = styled.button`
  width: 140px;
  cursor: pointer;
  padding: 7px 5px 7px 5px;
  border-radius: 10px;
  align-self: flex-start;
  margin: 0px 0px 50px 0px;
  border: ${(props) => props.theme.colors.cardGray};
  outline: none;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.footerGray};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverBtn};
  }

  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    align-self: center;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    margin: 0px 0px 20px 0px;
    padding: 3px;
    font-size: 13px;
    width: 110px;
  }
`;
