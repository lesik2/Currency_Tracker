import { useAppSelector } from './redux';
import { darkTheme, lightTheme } from '../constants/theme';

export function useTheme() {
  const isLightTheme = useAppSelector((state) => state.appReducer.isLightTheme);
  return isLightTheme ? lightTheme : darkTheme;
}
