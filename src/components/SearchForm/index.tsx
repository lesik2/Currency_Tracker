import React, { useEffect, useState } from 'react';

import searchIcon from '../../assets/images/searchIcon.svg';
import { STATIC_INFO } from '../../constants/index.ts';
import { useDebounce } from '../../hooks/useDebounce.ts';
import { useFetchCurrenciesNamesQuery } from '../../services/search.ts';
import { ICurrencySearch, ISearchForm } from '../../types/index.ts';
import { ElasticSearch } from '../ElasticSearch/index.tsx';
import {
  Icon, Input, SearchButton, Title,
  Wrapper,
  WrapperInput,
} from './styled.ts';

export { useDebounce } from '../../hooks/useDebounce.ts';

export function SearchForm({ setSearch }:ISearchForm) {
  const [list, setList] = useState<ICurrencySearch[]>([]);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const debounced = useDebounce(value);
  const { data } = useFetchCurrenciesNamesQuery('', {
    skip: debounced.length < 2,
    refetchOnFocus: true,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    // eslint-disable-next-line max-len
    const newList = data?.currencies.filter((item) => item.nameOfCurrency.toLowerCase().includes(debounced.toLowerCase()));
    if (newList) {
      setList(newList);
      setShow(debounced.length >= 2 && newList.length > 0 && newList[0].nameOfCurrency !== debounced);
    }
  }, [data, debounced]);
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Title>
        {STATIC_INFO.FORM_SEARCH}
      </Title>
      <WrapperInput>
        <Input value={value} onChange={handleInput} placeholder={STATIC_INFO.INPUT_PLACEHOLDER} />
        <SearchButton>
          <Icon alt="search image" src={searchIcon} />
        </SearchButton>
        {show && <ElasticSearch setSearch={setSearch} list={list} setShow={setShow} setValue={setValue} />}
      </WrapperInput>
    </Wrapper>
  );
}
