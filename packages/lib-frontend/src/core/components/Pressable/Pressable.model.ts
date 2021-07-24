import { ReactNode } from 'react';
import { TrackableProps } from '@lib/frontend/analytics/containers/Trackable/Trackable.model';
import { StyledViewProps } from '@lib/frontend/core/hooks/useViewStyles/useViewStyles.model';
import { NativeStyleModel, StyledProps } from '@lib/frontend/core/styles/style.model';

export interface PressableProps extends TrackableProps, StyledProps, StyledViewProps {
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
