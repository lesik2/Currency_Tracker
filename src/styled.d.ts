import 'styled-components';

import { ITheme } from './constants/theme';

type CustomTheme = ITheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
