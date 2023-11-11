import { useId } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';
import { changeTheme } from '../../store/reducers/appSlice.ts';
import {
  ThemeBowl, ToggleThemeInput, ToggleThemeLabel, Wrapper,
} from './styled.ts';

export function ToggleTheme() {
  const id = useId();
  const isDarkTheme = useAppSelector((state) => state.appReducer.isLightTheme);
  const dispatch = useAppDispatch();
  const handleOnChange = () => {
    dispatch(changeTheme());
  };
  return (
    <Wrapper>
      <ToggleThemeInput onChange={handleOnChange} checked={isDarkTheme} type="checkbox" id={`${id}-themeInput`} />
      <ToggleThemeLabel className="theme-label" htmlFor={`${id}-themeInput`}>
        <ThemeBowl className="theme-bowl" />
      </ToggleThemeLabel>
    </Wrapper>
  );
}
