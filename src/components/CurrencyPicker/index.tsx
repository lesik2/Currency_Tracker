import { useState } from 'react';

import { CODE_CURRENCY, CODES_NAMES } from '@constants/currency';
import {
  CardWrapper, CodeOfCurrencyText, IconCurrency, InfoWrapper, NameOfCurrencyText, Wrapper,
} from './styled';
import { DropDown } from '../DropDown/index';

export function CurrencyPicker() {
  const [currency, setCurrency] = useState(CODES_NAMES[0]);

  return (
    <Wrapper>
      <DropDown lists={CODES_NAMES} value={currency} setValue={setCurrency} />
      <CardWrapper>
        <IconCurrency alt={CODE_CURRENCY[currency].name} src={CODE_CURRENCY[currency].icon} />
        <InfoWrapper>
          <NameOfCurrencyText>
            {CODE_CURRENCY[currency].name}
          </NameOfCurrencyText>
          <CodeOfCurrencyText>
            {currency}
          </CodeOfCurrencyText>
        </InfoWrapper>
      </CardWrapper>
    </Wrapper>
  );
}
