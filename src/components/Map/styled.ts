import styled from 'styled-components';

export const MapSection = styled.section`
  width: 100%;
  height: 460px;
  margin-bottom: 200px;
  position: relative;
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    height: 350px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    height: 300px;
  }
`;
export const MarkerBtn = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`;
export const PopUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 10px 2px 10px;
  border-radius: 10px;
`;
export const PopUpTitle = styled.h2`
  margin: 0;
  font-size: 13px;
`;
export const Icon = styled.img`
  width: 45px;
  height: 45px;
`;
export const NotFoundMessage = styled.p`
  font-size: 23px;
  color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
    font-size: 19px;
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
    font-size: 16px;
  }
`;
