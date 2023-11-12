import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
  align-self: center;
  justify-self: center;
  height: 60px;
  width: 60px;
  border: 4px solid ${(props) => props.theme.colors.darkWhite};
  border-radius: 50%;
  border-right-color: ${(props) => props.theme.colors.loader};
  animation: ${spin} 1s infinite;
`;
