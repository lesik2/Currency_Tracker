import { useEffect } from 'react';

import { useAppDispatch } from './redux';
import { setTimeOfUpdate } from '../store/reducers/appSlice';
import { setCurrencies } from '../store/reducers/currenciesSlice';
import { ICurrency, IResultCurrencies } from '../types/index';

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
