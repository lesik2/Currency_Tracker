import { CurrencyCard } from '@components/CurrencyCard/index';
import { Loader } from '@components/InfinityLoader/index';
import { STATIC_INFO } from '@constants/index';
import { useAppSelector } from '@hooks/redux';
import { ICurrency } from '@customTypes/currency';
import { STOCKS } from '@constants/currency';
import {
  CardsWrapper, HomeWrapper, Title, Wrapper,
} from './styled';

export function Home() {
  const cards: ICurrency[] = useAppSelector((state) => state.currenciesReducer.currencies);

  return (
    <HomeWrapper data-testid="home-page" data-cy="home-page">
      <Wrapper>
        <Title>
          {STATIC_INFO.STOCKS}
        </Title>
        <CardsWrapper data-cy="cards-stocks-wrapper">
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
        <CardsWrapper data-cy="cards-currency-wrapper" data-testid="cards-currency-wrapper">
          {cards && cards.map((card) => (
            <CurrencyCard key={card.code} code={card.code} value={card.value} />
          )) }
        </CardsWrapper>
      </Wrapper>
    </HomeWrapper>
  );
}
