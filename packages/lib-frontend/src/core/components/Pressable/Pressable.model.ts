import { ReactNode } from 'react';
import { NativeStyleModel, StyledProps } from '@lib/frontend/core/styles/style.model';

export interface PressableProps extends StyledProps {
  confirmMessage?: string;
  isDisabled?: boolean;
  from?: NativeStyleModel;
  onPress?(): any;
  onPressIn?(): any;
  onPressOut?(): any;
  isPressed?: boolean;
  to?: NativeStyleModel;
  children: ReactNode | ((isActive?: boolean) => ReactNode);
  center?: boolean;
}
