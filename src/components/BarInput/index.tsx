import React, { useState } from 'react';

import { REGULAR_EXPRESSIONS } from '../../constants/index.ts';
import { IBar } from '../../types/index.ts';
import { CoordinateInput, ErrorMessage, Wrapper } from './styled.ts';

export type Bar = 'o'|'c'|'l'|'h';
export const BarCoordinates:Bar[] = ['o', 'c', 'l', 'h'];
export interface IBarInput{
  bar:IBar;
  handleChange:(value:string, index: number, key: keyof IBar)=>void;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}
export function BarInput({
  bar, handleChange, setIsError, id,
}:IBarInput) {
  const [error, setError] = useState(false);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newBar = { ...bar, [name]: value };
    if (name === 'o' || name === 'c' || name === 'l' || name === 'h') {
      handleChange(value, id, name);
    }
    isError(newBar);
  };

  const isError = (newBar:IBar) => {
    const values = Object.values(newBar);
    for (let i = 0; i < values.length; i += 1) {
      if (!REGULAR_EXPRESSIONS.validateInput.test(values[i])) {
        setError(true);
        setIsError(true);
        return;
      }
    }
    const numbers = values.map((item) => parseFloat(item));
    if (Math.max(...numbers) !== parseFloat(newBar.h) || Math.min(...numbers) !== parseFloat(newBar.l)) {
      setError(true);
      setIsError(true);
      return;
    }
    setError(false);
    setIsError(false);
  };

  return (
    <Wrapper>
      {BarCoordinates.map((item) => (
        <CoordinateInput
          $isError={bar[item].length !== 0 && !REGULAR_EXPRESSIONS.validateInput.test(bar[item])}
          placeholder={item}
          key={item}
          value={bar[item]}
          name={item}
          onChange={handleInput}
        />
      ))}
      {error
      && (
      <ErrorMessage>
        The coordinates should be numbers l(min) h(max)
      </ErrorMessage>
      )}
    </Wrapper>
  );
}
