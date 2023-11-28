import React, { useState } from 'react';

import arrowIcon from '@assets/images/arrow.svg';
import { CODE_CURRENCY } from '@constants/index';
import { IDropDown, TYPE_CODES } from '@customTypes/index';
import {
  Icon, ItemList, List, SelectedValue, Wrapper,
} from './styled';

export function DropDown({ lists, value, setValue }: IDropDown) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const handleSelect = (event: React.MouseEvent) => {
    const code = event.currentTarget.getAttribute('data-code');
    if (code) {
      setValue(code as TYPE_CODES);
      setActive(!active);
    }
  };
  return (
    <Wrapper>
      <SelectedValue data-cy="selected-currency" data-testid="selected-currency" onClick={handleClick}>
        {CODE_CURRENCY[value].name}
        <Icon $active={active} alt="arrow" src={arrowIcon} />
      </SelectedValue>
      <List data-cy="variants-currency" $active={active}>
        {lists.map((code) => (
          <ItemList onClick={handleSelect} key={code} data-code={code}>
            {CODE_CURRENCY[code].name}
          </ItemList>
        ))}
      </List>
    </Wrapper>
  );
}
