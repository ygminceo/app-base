import {
  NativeStyle,
  StyledPropsWithChildren,
  StyleGetter,
} from '@lib/frontend/core/styles/style.model';

export type UseStylesProps<P> = [props: StyledPropsWithChildren<P>, deps?: StyleGetter<P>[]];

export interface UseStylesReturns<P> {
  styles?: NativeStyle;
  inheritedStyles?: NativeStyle;
  computedStyles?: NativeStyle;
}
