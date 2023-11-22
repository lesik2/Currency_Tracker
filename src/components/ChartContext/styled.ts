import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 30px 30px 30px;
`;
export const WrapperBtn = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const WrapperInputs = styled.div`
  overflow-y: scroll;
  scrollbar-width: thin;
  height: 550px;
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
`;
