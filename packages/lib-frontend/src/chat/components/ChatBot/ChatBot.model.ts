import { ModalProps } from '@lib/frontend/core/components/Modal/Modal.model';

export interface ChatBotProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {}
