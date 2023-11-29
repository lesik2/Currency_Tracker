import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  position: relative;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      width: 300px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    width: 270px;
  }
`;
export const SelectedValue = styled.button`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 26px;
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
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      font-size: 22px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    font-size: 19px;
  }
`;

export const List = styled.div<{ $active?: boolean }>`
  width: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.colors.dropDown};
  height: ${(props) => (props.$active ? '120px' : '0px')};
  transition: height 0.3s;
  overflow-y: scroll;
  scrollbar-width: thin;
  border-radius: 10px;
  left: 0;
  top: 45px;
`;
export const ItemList = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.cardGray};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  padding-left: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    font-size: 17px;
  }
`;
export const Icon = styled.img<{ $active?: boolean }>`
  width: 20px;
  height: 15px;
  transition: transform 0.2s;
  transform: ${(props) => (props.$active ? 'rotate(0deg)' : 'rotate(90deg)')};
  margin-top: 6px;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    width: 15px;
    height: 12px;
  }
`;
