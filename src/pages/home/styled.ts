import styled from 'styled-components';

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 86px;
`;
export const Title = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 32px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 41px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 57px;
    height: 2px;
    width: 520px;
    background: ${(props) => props.theme.colors.cardGray};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  width: 1224px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(520px, 100%), 1fr));
  column-gap: 184px;
  justify-items: center;
  row-gap: 56px;
  width: 100%;
`;
