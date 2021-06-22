import {
  BankLinkTokenCreateRequestModel,
  BankLinkTokenCreateResponseModel,
} from '@lib/common/billing/models';
import { bankLinkTokenCreateHandler } from '@lib/backend/billing/handlers';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

export const main = requestHook<
  BankLinkTokenCreateRequestModel,
  BankLinkTokenCreateResponseModel
>(async (data) => await bankLinkTokenCreateHandler(data));
