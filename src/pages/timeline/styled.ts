import styled from 'styled-components';

export const TimeLineSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 200px;
  padding: 0px 120px 0px 140px;
  position: relative;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}px) {
      align-items: center;
      padding: 0px 50px 0px 50px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
      padding: 0px 10px 0px 10px;
  }
`;
