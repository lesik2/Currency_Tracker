/* eslint-disable max-len */
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.modalWrapper};
  z-index: ${(props) => props.theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  position: relative;
  border-radius: 15px;
  padding: 30px 70px 30px 30px;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  flex-direction: column;
  gap: 20px;
`;
export const Close = styled.div`
  position: absolute;
  right: -25px;
  top: -25px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: background-color 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  &:hover .close-img {
    filter: invert(50%) sepia(89%) saturate(1522%) hue-rotate(92deg) brightness(100%) contrast(103%);
  }
`;
export const Image = styled.img`
  transition: filter 0.2s;
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
