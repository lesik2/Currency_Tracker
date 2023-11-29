import React, { useEffect, useState } from 'react';

import searchIcon from '@assets/images/searchIcon.svg';
import { STATIC_INFO } from '@constants/index';
import { useDebounce } from '@hooks/useDebounce';
import { ICurrencySearch, ISearchForm } from '@customTypes/bankCard';
import { SEARCH_DATA } from '@constants/serachData';
import {
  Icon, Input, SearchButton, Title,
  Wrapper,
  WrapperInput,
} from './styled';
import { ElasticSearch } from '../ElasticSearch/index';

export { useDebounce } from '@hooks/useDebounce';

export function SearchForm({ handleChange }: ISearchForm) {
  const [list, setList] = useState<ICurrencySearch[]>([]);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  const debounced = useDebounce(value);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleChange(value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const newList = SEARCH_DATA.currencies.filter((item) =>
      item.nameOfCurrency.toLowerCase().includes(debounced.toLowerCase()));

    if (newList) {
      setList(newList);
      setShow(debounced.length >= 1 &&
        newList.length > 0 &&
        newList[0].nameOfCurrency !== debounced);
    }
  }, [debounced]);

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
        {show && (
        <ElasticSearch
          handleChange={handleChange}
          list={list}
          setShow={setShow}
          setValue={setValue}
        />
        )}
      </WrapperInput>
    </Wrapper>
  );
}
