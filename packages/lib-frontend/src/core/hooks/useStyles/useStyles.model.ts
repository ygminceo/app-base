import {
  NativeStyleModel,
  StyledPropsWithChildren,
  StyleGetterModel,
} from '@lib/frontend/core/styles/style.model';

export type UseStylesParamsModel<P> = [props: StyledPropsWithChildren<P>, deps?: StyleGetterModel<P>[]];

export interface UseStylesReturnsModel<P> {
  styles?: NativeStyleModel;
  inheritedStyles?: NativeStyleModel;
  computedStyles?: NativeStyleModel;
}
