import { CurrencyCard } from '../../components/CurrencyCard/index.tsx';
import { Loader } from '../../components/InfinityLoader/index.tsx';
import { STATIC_INFO, STOCKS } from '../../constants/index.ts';
import { useDate } from '../../hooks/useDate.ts';
import { useFetchLatestCurrenciesQuery } from '../../services/currencyService.ts';
import { ICurrency } from '../../types/index.ts';
import { getParametersForCurrencies } from '../../utils/index.ts';
import {
  CardsWrapper, HomeWrapper, Title, Wrapper,
} from './styled.ts';

export function Home() {
  const { data, isLoading } = useFetchLatestCurrenciesQuery(getParametersForCurrencies());
  const cards:ICurrency[]| undefined = data && Object.values(data?.data);
  useDate(data);
  return (
    <HomeWrapper>
      <Wrapper>
        <Title>
          {STATIC_INFO.STOCKS}
        </Title>
        <CardsWrapper>
          {STOCKS.map((stoke) => (
            <CurrencyCard
              key={stoke.code}
              code={stoke.code}
              value={stoke.value}
              isStock={stoke.isStock ?? false}
            />
          ))}
        </CardsWrapper>
      </Wrapper>
      <Wrapper>
        <Title>
          {STATIC_INFO.QUOTES}
        </Title>
        {isLoading && <Loader />}
        <CardsWrapper>
          {cards && cards.map((card) => (
            <CurrencyCard key={card.code} code={card.code} value={card.value} />
          )) }
        </CardsWrapper>
      </Wrapper>
    </HomeWrapper>
  );
}
