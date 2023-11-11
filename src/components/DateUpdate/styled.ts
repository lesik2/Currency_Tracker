import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 56px 0px 56px 0px;
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const TextDate = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.colors.darkWhite};
  font-size: 33px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 41px;
`;
export const DateImage = styled.img`
  width: 50px;
  height: 52px;
`;
