import React, { useState } from 'react';

import { CODES_NAMES, REGULAR_EXPRESSIONS, STATIC_INFO } from '../../constants/index.ts';
import { useDebounce } from '../../hooks/useDebounce.ts';
import { useConvertCurrencyQuery } from '../../services/currencyService.ts';
import { IModalContext } from '../../types/index.ts';
import { roundUpCurrency } from '../../utils/index.ts';
import { DropDown } from '../DropDown/index.tsx';
import {
  CurrencyAmount,
  CurrencyAmountWrapper,
  ErrorMessage, Result,
  Title, Wrapper, WrapperInputs,
} from './styled.ts';

export function ModalContext({ nameCard, code }:IModalContext) {
  const [value, setValue] = useState(CODES_NAMES[0]);

  const [amount, setAmount] = useState('1');


  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };


  const debounced = useDebounce(amount);


  const { data } = useConvertCurrencyQuery(
    { value: debounced, base_currency: code, currencies: value },
    {
      skip: debounced.length < 1 || !REGULAR_EXPRESSIONS.validateInput.test(debounced),
      refetchOnFocus: true,
    },
  );

  return (
    <Wrapper>
      <Title>
        {nameCard}
      </Title>
      <WrapperInputs>
        <CurrencyAmountWrapper>
          {
                !REGULAR_EXPRESSIONS.validateInput.test(debounced) && (
                <ErrorMessage>
                  {STATIC_INFO.ERROR_MESSAGE}
                </ErrorMessage>
                )
              }
          <CurrencyAmount
            $isError={!REGULAR_EXPRESSIONS.validateInput.test(debounced)}
            value={amount}
            onChange={handleInput}
          />
        </CurrencyAmountWrapper>
        <Result>
          {data
              && REGULAR_EXPRESSIONS.validateInput.test(debounced)
              && roundUpCurrency(data[0].value * parseFloat(debounced))}
        </Result>
      </WrapperInputs>
      <DropDown lists={CODES_NAMES} value={value} setValue={setValue} />
    </Wrapper>
  );
}
