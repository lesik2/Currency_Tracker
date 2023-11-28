import closeIcon from '@assets/images/close.svg';
import { IModal } from '@customTypes/index';
import {
  Close, Content,
  Image,
  Wrapper,
} from './styled';
import { Portal } from '../Portal';

export function Modal({ onClose, children }: IModal) {
  return (
    <Portal>
      <Wrapper>
        <Content>
          {children}
          <Close data-cy="cross-close" onClick={onClose}>
            <Image className="close-img" src={closeIcon} alt="close modal window" />
          </Close>
        </Content>
      </Wrapper>

    </Portal>
  );
}
