import { ReactElement, ReactNode } from 'react';
import { PressableProps } from 'react-native';
import { StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface DropdownProps
  extends StyledPropsWithChildren<{
    anchor: ReactElement<PressableProps>;
    onClose(): any;
    isOpen: boolean;
    fullWidth?: boolean;
    header?: ReactNode;
    width?: number;
    height?: number;
  }> {}
