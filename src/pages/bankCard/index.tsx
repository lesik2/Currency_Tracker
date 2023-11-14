import { useState } from 'react';

import { SearchForm } from '../../components/SearchForm/index.tsx';
import { Wrapper } from './styled.ts';

export function BankCard() {
  const [search, setSearch] = useState('');
  console.log(search);
  return (
    <Wrapper>
      <SearchForm setSearch={setSearch} />
    </Wrapper>
  );
}
