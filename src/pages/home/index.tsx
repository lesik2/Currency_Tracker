import { CurrencyCard } from '../../components/CurrencyCard/index.tsx';
import { Loader } from '../../components/InfinityLoader/index.tsx';
import { STATIC_INFO, STOCKS } from '../../constants/index.ts';
import { useAppSelector } from '../../hooks/redux.ts';
import { ICurrency } from '../../types/index.ts';
import {
  CardsWrapper, HomeWrapper, Title, Wrapper,
} from './styled.ts';

export function Home() {
  const cards:ICurrency[] = useAppSelector((state) => state.currenciesReducer.currencies);
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
        {cards.length === 0 && <Loader />}
        <CardsWrapper>
          {cards && cards.map((card) => (
            <CurrencyCard key={card.code} code={card.code} value={card.value} />
          )) }
        </CardsWrapper>
      </Wrapper>
    </HomeWrapper>
  );
}
