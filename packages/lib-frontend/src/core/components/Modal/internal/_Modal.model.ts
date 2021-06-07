import { ModalProps } from '@lib/frontend/core/components/Modal/Modal.model';

export interface _ModalProps
  extends Pick<
    ModalProps,
    'isDisabled' | 'isFullSize' | 'height' | 'onClose' | 'isOpen' | 'width' | 'children'
  > {
  backdrop?: boolean;
  closeOnBackdropPress?: boolean;
}
