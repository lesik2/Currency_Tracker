import styled from 'styled-components';

export const Wrapper = styled.ul<{ $show?: boolean }>`
  position: absolute;
  left: 0px;
  top: 67px;
  width: 450px;
  list-style: none;
  padding: 15px 0px 10px 0px;
  background-color: ${(props) => props.theme.colors.dropDown};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.colors.footerGray};
  z-index: ${(props) => props.theme.zIndex.elasticSearch};
  margin: 0;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    width: 350px;
    padding: 10px 0px 7px 0px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      width: 300px;
  }
`;

export const List = styled.li`
  font-size: 15px;
  cursor: pointer;
  padding: 7px 15px 7px 15px;
  display: block;
  width: 100%;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;
