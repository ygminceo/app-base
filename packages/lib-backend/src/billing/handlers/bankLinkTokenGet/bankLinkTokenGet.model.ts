import { AuthorizedRequestModel } from '@lib/common/authentication/models';
import { BankLinkTokenGetResponseModel } from '@lib/common/billing/models';

export type BankLinkTokenGetHandlerModel = (
  params: AuthorizedRequestModel,
) => Promise<BankLinkTokenGetResponseModel>;
