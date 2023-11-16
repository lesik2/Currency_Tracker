import { darkTheme, lightTheme } from '../constants/theme.ts';
import { useAppSelector } from './redux.ts';

export function useTheme() {
  const isLightTheme = useAppSelector((state) => state.appReducer.isLightTheme);
  return isLightTheme ? lightTheme : darkTheme;
}
