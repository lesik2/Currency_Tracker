import styled from 'styled-components';

export const Wrapper = styled.form`
  margin: 43px 0px 84px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  position: relative;
`;
export const WrapperInput = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 450px;
  height: 67px;
  background-color: ${(props) => props.theme.colors.inputBack};
  color: ${(props) => props.theme.colors.inputText};
  font-size: 18px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: normal;
  border-radius: 10px;
  padding: 20px;
  outline: none;
  border: none;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.secondary};
    box-shadow: inset 0px 0px 2px ${(props) => props.theme.colors.secondary};
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    width: 350px;
    height: 55px;
    font-size: 17px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      width: 300px;
      height: 50px;
      font-size: 16px;
  }
`;
export const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 38px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: normal;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      font-size: 28px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
      font-size: 21px;
  }
`;
export const SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.inputBack};
  position: absolute;
  right: 12px;
  top: 14px;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    top: 9px;
  }
`;
export const Icon = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    width: 20px;
    height: 20px;
  }
`;
