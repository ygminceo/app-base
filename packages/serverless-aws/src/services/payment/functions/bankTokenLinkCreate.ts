import { bankTokenLinkCreateHandler } from '@lib/backend/payment/handlers';
import { BankTokenLinkCreateRequest, BankTokenLinkCreateResponse } from '@lib/common/payment/models';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

export const main = requestHook<BankTokenLinkCreateRequest, BankTokenLinkCreateResponse>(
  async (data) => await bankTokenLinkCreateHandler(data),
);
