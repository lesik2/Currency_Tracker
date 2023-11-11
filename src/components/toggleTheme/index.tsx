import { useId } from 'react';

import {
  ThemeBowl, ToggleThemeInput, ToggleThemeLabel, Wrapper,
} from './styled.ts';

export function ToggleTheme() {
  const id = useId();
  const handleOnChange = () => {
  };
  return (
    <Wrapper>
      <ToggleThemeInput onChange={handleOnChange} type="checkbox" id={`${id}-themeInput`} />
      <ToggleThemeLabel className="theme-label" htmlFor={`${id}-themeInput`}>
        <ThemeBowl className="theme-bowl" />
      </ToggleThemeLabel>
    </Wrapper>
  );
}
