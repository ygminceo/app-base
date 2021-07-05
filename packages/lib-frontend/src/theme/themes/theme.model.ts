export interface ColorsModel {
  black: string;
  white: string;
  border: string;
  animation: {
    duration: number;
    transition: number;
  };
  background: {
    primary: string;
    contrast: string;
  };
  text: {
    primary: string;
    contrast: string;
  };
  primary: {
    light: string;
    main: string;
    dark: string;
  };
  secondary: {
    light: string;
    main: string;
    dark: string;
  };
  success: {
    light: string;
    main: string;
    dark: string;
  };
  error: {
    light: string;
    main: string;
    dark: string;
  };
}

export interface ShapeModel {
  spacing: number | string;
  spacingTight: number | string;
  spacingWhitespace: number | string;
  borderRadius: number;
}

export interface ThemeModel {
  name: string;
  isDark: boolean;
  shape: ShapeModel;
  colors: ColorsModel;
}
