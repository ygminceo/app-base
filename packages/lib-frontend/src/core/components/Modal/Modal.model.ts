import { PropsWithChildren, ReactNode } from 'react';
import { TrackableProps } from '@lib/frontend/analytics/containers/Trackable/Trackable.model';

export interface ModalProps
  extends TrackableProps,
    PropsWithChildren<{
      isDisabled?: boolean;
      header?: ReactNode;
      height?: number;
      onClose?(): any;
      isOpen?: boolean;
      width?: number;
      isFullSize?: boolean;
    }> {}
