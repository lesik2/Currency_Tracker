import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
  margin: 0px 0px 14px 0px;
`;
export const CoordinateInput = styled.input<{ $isError?: boolean }>`
  width: 100px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.inputBack};
  color: ${(props) => props.theme.colors.inputText};
  font-size: 15px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: normal;
  border-radius: 5px;
  padding: 7px;
  outline: none;
  border: none;
  border: 1px solid ${(props) => (props.$isError ? props.theme.colors.error : '')};
  &:focus {
    border: 1px solid
      ${(props) => (props.$isError ? props.theme.colors.error : props.theme.colors.secondary)};
    box-shadow: inset 0px 0px 2px
      ${(props) => (props.$isError ? props.theme.colors.error : props.theme.colors.secondary)};
  }
`;
export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 28px;
  font-size: 12px;
  left: 0px;
  color: ${(props) => props.theme.colors.secondary};
`;
