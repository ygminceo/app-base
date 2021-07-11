export interface ColorProps {
  color?: string;
  secondary?: boolean;
  contrast?: boolean;
  muted?: boolean;
  dark?: boolean;
  error?: boolean;
  light?: boolean;
  primary?: boolean;
  success?: boolean;
}

export interface ThemeColorProps
  extends Pick<ColorProps, 'primary' | 'secondary' | 'muted' | 'success' | 'error'> {}
