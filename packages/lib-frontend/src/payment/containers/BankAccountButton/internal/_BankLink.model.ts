import { BankAccountAddRequestModel } from '@lib/common/payment/models';

export interface _BankLinkProps {
  token: string;
  onSuccess(data: BankAccountAddRequestModel): any;
  onError(): any;
}
