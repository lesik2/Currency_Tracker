import ReactDOM from 'react-dom';

import {
  Close, Content,
  Image,
  Wrapper,
} from './styled';
import closeIcon from '../../assets/images/close.svg';
import { IModal } from '../../types/index';

export function Modal({ onClose, children }: IModal) {
  const portal = document.getElementById('portal');

  return portal
    ? ReactDOM.createPortal(
      <Wrapper>
        <Content>
          {children}
          <Close onClick={onClose}>
            <Image className="close-img" src={closeIcon} alt="close modal window" />
          </Close>
        </Content>
      </Wrapper>,
      portal,
    )
    : null;
}
