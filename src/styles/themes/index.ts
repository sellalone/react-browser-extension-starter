import { IDefaultTheme } from 'styled-components';

export type ThemeTypes = 'light' | 'dark';

export const lightTheme: IDefaultTheme = {
  backgroundColor: 'lightblue',
};

export const darkTheme: IDefaultTheme = {
  backgroundColor: '#181818',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
