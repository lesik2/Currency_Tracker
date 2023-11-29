import { IBar } from '@customTypes/chart';
import { REGULAR_EXPRESSIONS } from '@constants/index';

export const validateInputs = (newBar: IBar) => {
  const values = Object.values(newBar);
  if (values.some((value) => !REGULAR_EXPRESSIONS.numberFormatPattern.test(value))) {
    return true;
  }

  const numbers = values.map((item) => parseFloat(item));
  if (Math.max(...numbers) !== parseFloat(newBar.h) ||
  Math.min(...numbers) !== parseFloat(newBar.l)) {
    return true;
  }

  return false;
};
