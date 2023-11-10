import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  height: 103px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
`;
export const LabelImage = styled.img`
  width: 40px;
  height: 41px;
`;
export const LinkText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.font20};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.f300};
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 115px;
`;
