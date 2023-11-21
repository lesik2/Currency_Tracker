import styled, { keyframes } from 'styled-components';

const changeWidth = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;
const show = keyframes`
  from {
      right: -100%;
    }

  to {
    right: 30px;
  }
`;
export const Wrapper = styled.div<{ $isVisible?: boolean }>`
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  width: 450px;
  position: absolute;
  bottom: 50px;
  right: 30px;
  animation: ${show} 0.3s ease-out 1;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  gap: 15px;
  border: 2px ${(props) => props.theme.colors.cardGray} solid;
  background-color: ${(props) => props.theme.colors.lightBlack};
`;
export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TimeShowing = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.colors.loader};
  animation: ${changeWidth} 3.3s linear 1;
`;
export const MainText = styled.h2`
  margin: 0;
  font-size: 23px;
  color: ${(props) => props.theme.colors.secondary};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 49px;
`;
export const Icon = styled.img`
  width: 35px;
  height: 35px;
`;
