import React, { memo, useState } from 'react';

import { REGULAR_EXPRESSIONS, STATIC_INFO } from '@constants/index';
import { BarCoordinates } from '@constants/chart';
import { IBar, IBarInput, Bar } from '@customTypes/chart';
import { CoordinateInput, ErrorMessage, Wrapper } from './styled';
import { validateInputs } from './BarInput.helpers';

export const BarInput = memo(({ bar, handleChange, setIsError, id }: IBarInput) => {
  const [error, setError] = useState(false);
  const isError = (newBar: IBar) => {
    const result = validateInputs(newBar);
    if (result) {
      setError(true);
      setIsError(true);
    } else {
      setError(false);
      setIsError(false);
    }
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
