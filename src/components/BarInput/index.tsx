import React, { memo, useState } from 'react';

import { REGULAR_EXPRESSIONS, STATIC_INFO, BarCoordinates } from '@constants/index';
import { IBar, IBarInput } from '@customTypes/index';
import { CoordinateInput, ErrorMessage, Wrapper } from './styled';

export const BarInput = memo(({ bar, handleChange, setIsError, id }: IBarInput) => {
  const [error, setError] = useState(false);
  const isError = (newBar: IBar) => {
    const values = Object.values(newBar);
    for (let i = 0; i < values.length; i += 1) {
      if (!REGULAR_EXPRESSIONS.validateInput.test(values[i])) {
        setError(true);
        setIsError(true);
        return;
      }
    }
    const numbers = values.map((item) => parseFloat(item));
    if (Math.max(...numbers) !== parseFloat(newBar.h) ||
    Math.min(...numbers) !== parseFloat(newBar.l)) {
      setError(true);
      setIsError(true);
      return;
    }
    setError(false);
    setIsError(false);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newBar = { ...bar, [name]: value };
    if (name === 'o' || name === 'c' || name === 'l' || name === 'h') {
      handleChange(value, id, name);
    }
    isError(newBar);
  };
  return (
    <Wrapper>
      {BarCoordinates.map((item) => (
        <CoordinateInput
          data-cy="bar-input"
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
        {STATIC_INFO.ERROR_MESSAGE_BAR}
      </ErrorMessage>
      )}
    </Wrapper>
  );
});
