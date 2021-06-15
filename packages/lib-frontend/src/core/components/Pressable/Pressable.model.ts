import { NativeStyleModel, StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface PressableProps
  extends StyledPropsWithChildren<{
    confirmMessage?: string;
    isDisabled?: boolean;
    from?: NativeStyleModel;
    onPress?(): any;
    isPressed?: boolean;
    to?: NativeStyleModel;
  }> {}
