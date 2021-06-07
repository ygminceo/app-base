import { NativeStyle, StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface PressableProps
  extends StyledPropsWithChildren<{
    confirmMessage?: string;
    isDisabled?: boolean;
    from?: NativeStyle;
    onPress?(): any;
    isPressed?: boolean;
    to?: NativeStyle;
  }> {}
