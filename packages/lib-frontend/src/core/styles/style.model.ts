import { PropsWithChildren } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { ThemeModel } from '@lib/frontend/theme/themes/theme.model';

export type NativeStyleModel = ViewStyle | TextStyle | ImageStyle | undefined | NativeStyleModel[];

export interface StyledProps {
  style?: NativeStyleModel;
  theme?: ThemeModel;
  isMobile?: boolean;
}

export type StyledPropsWithChildren<P> = PropsWithChildren<P> & StyledProps;

export type StyleGetterModel<P> =
  | NativeStyleModel
  | ((props: StyledPropsWithChildren<P>) => NativeStyleModel);
