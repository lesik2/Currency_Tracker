import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  height: 103px;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const LabelImage = styled.img`
  width: 40px;
  height: 41px;
`;
export const LinkText = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 41px;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 115px;
`;
