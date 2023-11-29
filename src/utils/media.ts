import { RuleSet, css } from 'styled-components';
import { theme } from '@constants/theme';

export type TypeBreakPoint = keyof typeof theme.breakPoints
export type TypeMedia = Record<
TypeBreakPoint,
(literals: TemplateStringsArray) => RuleSet<object>>

export const media: TypeMedia = Object.keys(theme.breakPoints).reduce((acc, label) => {
  acc[label as TypeBreakPoint] = (literals: TemplateStringsArray) => css`      
  @media(max-width: ${theme.breakPoints[label as TypeBreakPoint]}px) {
      ${css(literals)}
  }

  `;

  return acc;
}, {} as TypeMedia);
