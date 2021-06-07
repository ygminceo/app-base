export interface Colors {
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

export interface Shape {
  spacing: number | string;
  spacingTight: number | string;
  spacingWhitespace: number | string;
  borderRadius: number;
}

export interface Theme {
  name: string;
  dark: boolean;
  shape: Shape;
  colors: Colors;
}
