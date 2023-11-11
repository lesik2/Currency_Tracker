import { CODE_CURRENCY, DOLLAR_SYMBOL } from '../../constants/index.ts';
import { ICurrencyCard } from '../../types/index.ts';
import {
  CardIcon, CardSubTitle, CardTitle, WrapperCard,
  WrapperTitles,
} from './styled.ts';

export function CurrencyCard({ code, value }:ICurrencyCard) {
  return (
    <WrapperCard>
      <CardIcon alt="currency image" src={CODE_CURRENCY[code].icon} />
      <WrapperTitles>
        <CardTitle>
          {
            CODE_CURRENCY[code].name
          }
        </CardTitle>
        <CardSubTitle>
          {DOLLAR_SYMBOL}
          {' '}
          {value}
        </CardSubTitle>
      </WrapperTitles>
    </WrapperCard>
  );
}
