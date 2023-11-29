import { useState } from 'react';

import { CODE_CURRENCY, DOLLAR_SYMBOL, PERCENTAGE_SYMBOL } from '@constants/currency';
import { ICurrencyCard } from '@customTypes/currency';
import { roundUpCurrency } from '@utils/currency';
import {
  CardIcon, CardSubTitle, CardTitle, WrapperCard,
  WrapperTitles,
} from './styled';
import { Modal } from '../Modal/index';
import { ModalContext } from '../ModalContext/index';

export function CurrencyCard({
  code, value, isStock = false,
}: ICurrencyCard) {
  const subtitle = isStock ? `${value}${PERCENTAGE_SYMBOL}` : `${DOLLAR_SYMBOL} ${roundUpCurrency(value)}`;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <WrapperCard onClick={handleOpen} data-cy="currency-card" data-testid="currency-card">
        <CardIcon alt={CODE_CURRENCY[code].name} src={CODE_CURRENCY[code].icon} />
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
        <ModalContext valueOfBase={value} nameCard={CODE_CURRENCY[code].name} />
      </Modal>
      )}
    </>

  );
}
