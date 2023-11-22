import React, { useState } from 'react';

import { CODES_NAMES, REGULAR_EXPRESSIONS, STATIC_INFO } from '../../constants/index.ts';
import { useAppSelector } from '../../hooks/redux.ts';
import { IModalContext, TYPE_CODES } from '../../types/index.ts';
import { roundUpCurrency } from '../../utils/index.ts';
import { DropDown } from '../DropDown/index.tsx';
import {
  CurrencyAmount,
  CurrencyAmountWrapper,
  ErrorMessage, Result,
  Title, Wrapper, WrapperInputs,
} from './styled.ts';

export function ModalContext({ nameCard, valueOfBase }:IModalContext) {
  const currencies = useAppSelector((state) => state.currenciesReducer.currencies);
  const [value, setValue] = useState<TYPE_CODES>(CODES_NAMES[0]);
  const [amount, setAmount] = useState('1');
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  const convertCurrency = () => {
    const chosenCurrency = currencies.find((currency) => currency.code === value);
    if (chosenCurrency) {
      return roundUpCurrency((parseFloat(amount) / valueOfBase) * chosenCurrency.value);
    }
    return 0;
  };
  return (
    <Wrapper>
      <Title>
        {nameCard}
      </Title>
      <WrapperInputs>
        <CurrencyAmountWrapper>
          {
                !REGULAR_EXPRESSIONS.validateInput.test(amount) && (
                <ErrorMessage>
                  {STATIC_INFO.ERROR_MESSAGE}
                </ErrorMessage>
                )
              }
          <CurrencyAmount
            $isError={!REGULAR_EXPRESSIONS.validateInput.test(amount)}
            value={amount}
            onChange={handleInput}
          />
        </CurrencyAmountWrapper>
        <Result>
          {REGULAR_EXPRESSIONS.validateInput.test(amount) && convertCurrency()}
        </Result>
      </WrapperInputs>
      <DropDown lists={CODES_NAMES} value={value} setValue={setValue} />
    </Wrapper>
  );
}
