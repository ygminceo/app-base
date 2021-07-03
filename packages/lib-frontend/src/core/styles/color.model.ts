export interface ColorProps {
  black?: boolean;
  color?: string;
  secondary?: boolean;
  contrast?: boolean;
  dark?: boolean;
  error?: boolean;
  light?: boolean;
  primary?: boolean;
  success?: boolean;
  white?: boolean;
}

export interface ThemeColorProps
  extends Pick<ColorProps, 'primary' | 'secondary' | 'success' | 'error'> {}
