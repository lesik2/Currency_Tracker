import React, { useState } from 'react';

import { CODES_NAMES, REGULAR_EXPRESSIONS, STATIC_INFO } from '@constants/index';
import { useAppSelector } from '@hooks/redux';
import { IModalContext, TYPE_CODES } from '@customTypes/index';
import { roundUpCurrency } from '@utils/index';
import {
  CurrencyAmount,
  CurrencyAmountWrapper,
  ErrorMessage, Result,
  Title, Wrapper, WrapperInputs,
} from './styled';
import { DropDown } from '../DropDown/index';

export function ModalContext({ nameCard, valueOfBase }: IModalContext) {
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
    <Wrapper data-cy="modal-currency" data-testid="modal-currency">
      <Title>
        {nameCard}
      </Title>
      <WrapperInputs>
        <CurrencyAmountWrapper>
          {
                !REGULAR_EXPRESSIONS.validateInput.test(amount) && (
                <ErrorMessage data-cy="error-message-currency" data-testid="error-message-currency">
                  {STATIC_INFO.ERROR_MESSAGE}
                </ErrorMessage>
                )
              }
          <CurrencyAmount
            data-cy="input-amount"
            data-testid="input-amount"
            $isError={!REGULAR_EXPRESSIONS.validateInput.test(amount)}
            value={amount}
            onChange={handleInput}
          />
        </CurrencyAmountWrapper>
        <Result data-cy="result-currency" data-testid="result-currency">
          {REGULAR_EXPRESSIONS.validateInput.test(amount) && convertCurrency()}
        </Result>
      </WrapperInputs>
      <DropDown lists={CODES_NAMES} value={value} setValue={setValue} data-testid="dropdown" />
    </Wrapper>
  );
}
