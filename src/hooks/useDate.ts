import { useEffect } from 'react';

import { setTimeOfUpdate } from '../store/reducers/appSlice.ts';
import { IResultCurrencies } from '../types/index.ts';
import { useAppDispatch } from './redux.ts';

export function useDate(data: IResultCurrencies | undefined) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setTimeOfUpdate(data.meta.last_updated_at));
    }
  }, [data, dispatch]);
}
