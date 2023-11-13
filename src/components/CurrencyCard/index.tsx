import { useState } from 'react';

import { CODE_CURRENCY, DOLLAR_SYMBOL, PERCENTAGE_SYMBOL } from '../../constants/index.ts';
import { ICurrencyCard } from '../../types/index.ts';
import { ROUND_UP_CURRENCY } from '../../utils/index.ts';
import { Modal } from '../Modal/index.tsx';
import { ModalContext } from '../ModalContext/index.tsx';
import {
  CardIcon, CardSubTitle, CardTitle, WrapperCard,
  WrapperTitles,
} from './styled.ts';

export function CurrencyCard({
  code, value, isStock = false,
}:ICurrencyCard) {
  const subtitle = isStock ? `${value}${PERCENTAGE_SYMBOL}` : `${DOLLAR_SYMBOL} ${ROUND_UP_CURRENCY(value)}`;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <WrapperCard onClick={handleOpen}>
        <CardIcon alt="currency image" src={CODE_CURRENCY[code].icon} />
        <WrapperTitles>
          <CardTitle>
            {
            CODE_CURRENCY[code].name
          }
          </CardTitle>
          <CardSubTitle>
            {subtitle}
          </CardSubTitle>
        </WrapperTitles>
      </WrapperCard>
      {isOpen && !isStock
      && (
      <Modal
        onClose={handleClose}
      >
        <ModalContext code={code} nameCard={CODE_CURRENCY[code].name} />
      </Modal>
      )}
    </>

  );
}
