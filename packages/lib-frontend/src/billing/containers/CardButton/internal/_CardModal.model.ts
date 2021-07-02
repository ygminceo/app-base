import { ModalProps } from '@lib/frontend/core/components/Modal/Modal.model';

export interface _CardModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {
  token: string;
}
