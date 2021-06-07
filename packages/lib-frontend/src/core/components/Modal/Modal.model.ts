import { PropsWithChildren, ReactNode } from 'react';

export interface ModalProps
  extends PropsWithChildren<{
    isDisabled?: boolean;
    header?: ReactNode;
    height?: number;
    onClose?(): any;
    isOpen?: boolean;
    width?: number;
    isFullSize?: boolean;
  }> {}
