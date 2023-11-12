import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
`;
export const SelectedValue = styled.button`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 28px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: normal;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2px 10px 2px 10px;
  height: 45px;
  width: 100%;
  cursor: pointer;
`;

export const List = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 120px;
  overflow-y: scroll;
`;
export const ItemList = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.cardGray};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  padding-left: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.darkWhite};
  }
`;
export const Icon = styled.img<{ $active?: boolean }>`
  width: 20px;
  height: 15px;
  transition: transform 0.2s;
  transform: ${(props) => (props.$active ? 'rotate(0deg)' : 'rotate(90deg)')};
  margin-top: 6px;
`;
