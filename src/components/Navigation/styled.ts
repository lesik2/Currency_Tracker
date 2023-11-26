import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 115px;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      gap: 70px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      gap: 45px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
        flex-direction: column;
        gap: 25px;
    }
`;
export const LinkText = styled.p<{ $isActive?: boolean }>`
  font-size: 20px;
  display: block;
  padding: 0px 15px 0px 15px;
  background-color: ${(props) => props.$isActive && props.theme.colors.darkWhite};
  line-height: 41px;
  transition: background-color 0.2s;
  border-radius: 60px;
  color: ${(props) => (props.$isActive ? props.theme.colors.primary : props.theme.colors.secondary)};
  font-weight: ${(props) => props.theme.fontWeight.light};
  &:hover {
    background-color: ${(props) => props.theme.colors.darkWhite};
    color: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptopS}px) {
      font-size: 16px;
      padding: 0px 10px 0px 10px;
      line-height: 30px;
  }
`;
