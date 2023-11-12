import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import closeIcon from '../../assets/images/close.svg';
import { CODES_NAMES } from '../../constants/index.ts';
import { useDebounce } from '../../hooks/debounce.ts';
import { useConvertCurrencyQuery } from '../../services/currencyService.ts';
import { IModal } from '../../types/index.ts';
import { DropDown } from '../DropDown/index.tsx';
import {
  Close, Content, CurrencyAmount,
  CurrencyAmountWrapper,
  ErrorMessage,
  Image, Result,
  Title, Wrapper, WrapperInputs,
} from './styled.ts';

export function Modal({ onClose, nameCard, code }:IModal) {
  const [value, setValue] = useState(CODES_NAMES[0]);
  const portal = document.getElementById('portal');
  const [amount, setAmount] = useState('1');
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  const debounced = useDebounce(amount);
  const { data } = useConvertCurrencyQuery(
    { value: debounced, base_currency: code, currencies: value },
    {
      skip: debounced.length < 1 || !/^[0-9]*[.,]?[0-9]+$/.test(debounced),
      refetchOnFocus: true,
    },
  );
  return portal
    ? ReactDOM.createPortal(
      <Wrapper>
        <Content>
          <Title>
            {nameCard}
          </Title>
          <WrapperInputs>
            <CurrencyAmountWrapper>
              {
                !/^[0-9]*[.,]?[0-9]+$/.test(debounced) && (
                <ErrorMessage>
                  Input should be a number (e.g. 12)
                </ErrorMessage>
                )
              }
              <CurrencyAmount $isError={!/^[0-9]*[.,]?[0-9]+$/.test(debounced)} value={amount} onChange={handleInput} />
            </CurrencyAmountWrapper>
            <Result>
              {data
              && /^[0-9]*[.,]?[0-9]+$/.test(debounced)
              && Math.round(data[0].value * parseFloat(debounced) * 100000) / 100000}
            </Result>
          </WrapperInputs>
          <DropDown lists={CODES_NAMES} value={value} setValue={setValue} />
          <Close onClick={onClose}>
            <Image className="close-img" src={closeIcon} alt="close modal window" />
          </Close>
        </Content>
      </Wrapper>,
      portal,
    )
    : null;
}
