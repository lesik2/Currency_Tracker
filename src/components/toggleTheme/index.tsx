import { useId } from 'react';

import {
  ThemeBowl, ToggleThemeInput, ToggleThemeLabel, Wrapper,
} from './styled.ts';

function ToggleTheme() {
  const id = useId();
  const handleOnChange = () => {
  };
  return (
    <Wrapper data-testid="toggle-theme">
      <ToggleThemeInput onChange={handleOnChange} type="checkbox" id={`${id}-themeInput`} />
      <ToggleThemeLabel className="theme-label" htmlFor={`${id}-themeInput`}>
        <ThemeBowl data-cy="toggle-bowl" data-testid="toggle-bowl" className="theme-bowl" />
      </ToggleThemeLabel>
    </Wrapper>
  );
}
export default ToggleTheme;
