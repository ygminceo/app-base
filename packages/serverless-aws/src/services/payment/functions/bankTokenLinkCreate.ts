import { bankTokenLinkCreateHandler } from '@lib/backend/payment/handlers';
import {
  BankTokenLinkCreateRequestModel,
  BankTokenLinkCreateResponseModel,
} from '@lib/common/payment/models';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

export const main = requestHook<BankTokenLinkCreateRequestModel, BankTokenLinkCreateResponseModel>(
  async (data) => await bankTokenLinkCreateHandler(data),
);
