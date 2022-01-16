import { DefaultTheme } from "styled-components";

import palette from "./palette";

export const theme: DefaultTheme = {
  colors: {
    primary: palette.blue,
    secondary: palette.darkGray,
    tertiary: palette.gray,
    white: palette.white,
    black: palette.black,
    transparent: 'transparent',
    warning: palette.warning,
    background: palette.background
  },
};

export type Theme = typeof theme;
