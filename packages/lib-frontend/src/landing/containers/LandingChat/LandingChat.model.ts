import { ModalProps } from '@lib/frontend/core/components/Modal/Modal.model';

export interface LandingChatProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {}
