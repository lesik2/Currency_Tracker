import styled from 'styled-components';

export const WrapperCard = styled.div`
  display: flex;
  width: 520px;
  padding: 30px 27px 30px 32px;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.cardGray};
  background-color: ${(props) => props.theme.colors.lightBlack};
  cursor: pointer;
  transition:
    transform 0.3s,
    border-radius 0.3s;
  &:hover {
    transform: scale(1.05);
    border-radius: 20px;
  }
`;
export const CardIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;
export const WrapperTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
export const CardTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.darkWhite};
  font-size: 35px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 49px;
  margin: 0;
`;
export const CardSubTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.light};
  color: ${(props) => props.theme.colors.gray};
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: 32px;
  line-height: 41px;
  font-style: normal;
`;
