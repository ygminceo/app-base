import { BankAddRequestModel } from '@lib/common/billing/models';
import { ModalProps } from '@lib/frontend/core/components/Modal/Modal.model';

export interface _BankModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {
  token: string;
  onSuccess(data: BankAddRequestModel): any;
}
