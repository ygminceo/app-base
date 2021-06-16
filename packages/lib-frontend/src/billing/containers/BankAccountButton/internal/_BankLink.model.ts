import { BankAccountAddRequestModel } from '@lib/common/billing/models';

export interface _BankLinkProps {
  token: string;
  onSuccess(data: BankAccountAddRequestModel): any;
  onError(): any;
}
