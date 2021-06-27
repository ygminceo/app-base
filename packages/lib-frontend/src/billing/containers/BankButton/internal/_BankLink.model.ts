import { BankAddRequestModel } from '@lib/common/billing/models';

export interface _BankLinkProps {
  token: string;
  onSuccess(data: BankAddRequestModel): any;
  onError(): any;
}
