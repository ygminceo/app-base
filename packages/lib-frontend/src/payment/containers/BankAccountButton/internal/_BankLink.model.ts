import { BankAccountAddRequest } from '@lib/common/payment/models';

export interface _BankLinkProps {
  token: string;
  onSuccess(data: BankAccountAddRequest): any;
  onError(): any;
}
