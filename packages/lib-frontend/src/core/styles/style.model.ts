import { Theme } from '@lib/frontend/theme/themes/theme.model';
import { PropsWithChildren } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type NativeStyle = ViewStyle | TextStyle | ImageStyle | undefined | NativeStyle[];

export interface StyledProps {
  style?: NativeStyle;
  theme?: Theme;
  isMobile?: boolean;
}

export type StyledPropsWithChildren<P> = PropsWithChildren<P> & StyledProps;

export type StyleGetter<P> = NativeStyle | ((props: StyledPropsWithChildren<P>) => NativeStyle);
