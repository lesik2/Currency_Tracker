import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  flex-direction: column;
  gap: 20px;
  padding: 30px 70px 30px 30px;
`;
export const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 30px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin-bottom: 30px;
`;
export const Result = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 25px;
  font-weight: ${(props) => props.theme.fontWeight.light};
`;
export const WrapperInputs = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`;
export const CurrencyAmountWrapper = styled.div`
  position: relative;
`;
export const ErrorMessage = styled.p`
  position: absolute;
  left: 11px;
  bottom: 60px;
  width: 270px;
  color: ${(props) => props.theme.colors.error};
`;
export const CurrencyAmount = styled.input<{ $isError?: boolean }>`
  width: 110px;
  height: 50px;
  margin-left: 12px;
  padding: 5px 10px 5px 10px;
  border: 1px solid ${(props) => props.theme.colors.cardGray};
  outline: none;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  background-color: ${(props) => props.theme.colors.inputBack};
  color: ${(props) => props.theme.colors.inputText};
  &:focus {
    border: 1px solid ${(props) => (props.$isError ? props.theme.colors.error : props.theme.colors.secondary)};
    box-shadow: inset 0px 0px 2px
      ${(props) => (props.$isError ? props.theme.colors.error : props.theme.colors.secondary)};
  }
`;
