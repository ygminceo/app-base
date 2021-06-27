import { AuthorizedRequestModel } from '@lib/common/authentication/models';
import { BankLinkTokenCreateResponseModel } from '@lib/common/billing/models';

export type BankLinkTokenCreateHandlerModel = (
  params: AuthorizedRequestModel,
) => Promise<BankLinkTokenCreateResponseModel>;
