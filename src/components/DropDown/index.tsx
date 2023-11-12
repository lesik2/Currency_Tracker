import React, { useState } from 'react';

import arrowIcon from '../../assets/images/arrow.svg';
import { CODE_CURRENCY } from '../../constants/index.ts';
import {
  Icon, ItemList, List, SelectedValue, Wrapper,
} from './styled.ts';

export interface IDropDown{
  lists: string[],
  value: string;
  setValue:React.Dispatch<React.SetStateAction<string>>;
  initialValue: string;

}
export function DropDown({
  lists, value, setValue, initialValue,
}:IDropDown) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const handleSelect = (event: React.MouseEvent) => {
    const code = event.currentTarget.getAttribute('data-code');
    if (code) {
      setValue(code);
      setActive(!active);
    }
  };
  return (
    <Wrapper>
      <SelectedValue onClick={handleClick}>
        {initialValue === value ? initialValue : CODE_CURRENCY[value].name}
        <Icon $active={active} alt="arrow" src={arrowIcon} />
      </SelectedValue>
      {active && (
      <List>
        {lists.map((code) => (
          <ItemList onClick={handleSelect} key={code} data-code={code}>
            {CODE_CURRENCY[code].name}
          </ItemList>
        ))}
      </List>
      )}
    </Wrapper>
  );
}
