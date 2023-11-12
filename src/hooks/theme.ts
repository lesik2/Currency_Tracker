import { darkTheme, lightTheme, theme } from '../constants/theme.ts';
import { useAppSelector } from './redux.ts';

export function useTheme() {
  const isLightTheme = useAppSelector((state) => state.appReducer.isLightTheme);
  const newTheme = JSON.parse(JSON.stringify(theme));
  newTheme.colors = isLightTheme ? lightTheme : darkTheme;
  return newTheme;
}
