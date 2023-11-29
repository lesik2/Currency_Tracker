import { darkTheme, lightTheme } from '@constants/theme';
import { useAppSelector } from './redux';

export function useTheme() {
  const isLightTheme = useAppSelector((state) => state.appReducer.isLightTheme);

  return isLightTheme ? lightTheme : darkTheme;
}
