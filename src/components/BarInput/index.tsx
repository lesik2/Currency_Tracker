import React, { memo, useState } from 'react';

import { REGULAR_EXPRESSIONS, STATIC_INFO } from '@constants/index';
import { BarCoordinates } from '@constants/chart';
import { IBar, IBarInput, Bar } from '@customTypes/chart';
import { CoordinateInput, ErrorMessage, Wrapper } from './styled';

export const BarInput = memo(({ bar, handleChange, setIsError, id }: IBarInput) => {
  const [error, setError] = useState(false);
  const isError = (newBar: IBar) => {
    const values = Object.values(newBar);
    for (let i = 0; i < values.length; i += 1) {
      if (!REGULAR_EXPRESSIONS.numberFormatPattern.test(values[i])) {
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
  // eslint-disable-next-line max-len
  const isBar = (name: string): name is Bar => BarCoordinates.some((barCoordinate) => barCoordinate === name);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newBar = { ...bar, [name]: value };
    if (isBar(name)) {
      handleChange(value, id, name);
    }
    isError(newBar);
  };

  return (
    <Wrapper>
      {BarCoordinates.map((item) => (
        <CoordinateInput
          data-cy="bar-input"
          $isError={bar[item].length !== 0 &&
            !REGULAR_EXPRESSIONS.numberFormatPattern.test(bar[item])}
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
