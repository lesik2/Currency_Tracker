import { CODE_CURRENCY, DOLLAR_SYMBOL, PERCENTAGE_SYMBOL } from '../../constants/index.ts';
import { ICurrencyCard } from '../../types/index.ts';
import {
  CardIcon, CardSubTitle, CardTitle, WrapperCard,
  WrapperTitles,
} from './styled.ts';

export function CurrencyCard({ code, value, isStock = false }:ICurrencyCard) {
  const subtitle = isStock ? `${value}${PERCENTAGE_SYMBOL}` : `${DOLLAR_SYMBOL} ${Math.round(value * 100000) / 100000}`;
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
          {subtitle}
        </CardSubTitle>
      </WrapperTitles>
    </WrapperCard>
  );
}
