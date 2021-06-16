import {
  BankLinkTokenCreateRequestModel,
  BankLinkTokenCreateResponseModel,
} from '@lib/common/billing/models';

export type BankLinkTokenCreateHandlerModel = (
  data: BankLinkTokenCreateRequestModel,
) => Promise<BankLinkTokenCreateResponseModel>;
