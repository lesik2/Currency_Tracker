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
  display: flex;
  align-items: center;
  justify-content: center;
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
