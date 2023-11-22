import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 155px;
  align-items: flex-start;
  margin-bottom: 76px;
  margin-left: 30px;
`;
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const IconCurrency = styled.img`
  width: 80px;
  height: 80px;
`;
export const NameOfCurrencyText = styled.h3`
  font-size: 35px;
  color: ${(props) => props.theme.colors.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 49px;
  margin: 0;
`;
export const CodeOfCurrencyText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-style: normal;
`;
