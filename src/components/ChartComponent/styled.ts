import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const WrapperChart = styled.div`
  width: 1105px;
`;
export const ChartBtn = styled.button`
  width: 140px;
  cursor: pointer;
  padding: 7px 5px 7px 5px;
  border-radius: 10px;
  align-self: flex-start;

  margin: 0px 0px 50px 40px;
  border: ${(props) => props.theme.colors.cardGray};
  outline: none;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.footerGray};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverBtn};
  }
`;
