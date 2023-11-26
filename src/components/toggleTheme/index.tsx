import { useId } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeTheme } from '@store/reducers/appSlice';
import {
  ThemeBowl, ToggleThemeInput, ToggleThemeLabel, Wrapper,
} from './styled';

export function ToggleTheme() {
  const id = useId();
  const isDarkTheme = useAppSelector((state) => state.appReducer.isLightTheme);
  const dispatch = useAppDispatch();
  const handleOnChange = () => {
    dispatch(changeTheme());
  };
  return (
    <Wrapper data-testid="toggle-theme">
      <ToggleThemeInput onChange={handleOnChange} checked={isDarkTheme} type="checkbox" id={`${id}-themeInput`} />
      <ToggleThemeLabel className="theme-label" htmlFor={`${id}-themeInput`}>
        <ThemeBowl data-cy="bowl-theme" className="theme-bowl" />
      </ToggleThemeLabel>
    </Wrapper>
  );
}
