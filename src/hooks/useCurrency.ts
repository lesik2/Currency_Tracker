import { useEffect } from 'react';

import { setTimeOfUpdate } from '../store/reducers/appSlice.ts';
import { setCurrencies } from '../store/reducers/currenciesSlice.ts';
import { ICurrency, IResultCurrencies } from '../types/index.ts';
import { useAppDispatch } from './redux.ts';

export function useCurrency(data: IResultCurrencies | undefined) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      const cards: ICurrency[] = Object.values(data.data);
      dispatch(setTimeOfUpdate(data.meta.last_updated_at));
      dispatch(setCurrencies(cards));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
}
