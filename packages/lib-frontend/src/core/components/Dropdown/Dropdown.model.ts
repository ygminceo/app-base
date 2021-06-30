import { ReactNode } from 'react';
import { StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface DropdownProps
  extends StyledPropsWithChildren<{
    anchor: ReactNode;
    onClose?(): any;
    isOpen?: boolean;
    fullWidth?: boolean;
    header?: ReactNode;
    width?: number;
    height?: number;
  }> {}
