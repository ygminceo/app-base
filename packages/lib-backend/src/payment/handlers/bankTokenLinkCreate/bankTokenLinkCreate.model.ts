import { BankTokenLinkCreateRequest, BankTokenLinkCreateResponse } from '@lib/common/payment/models';

export type bankTokenLinkCreateFunction = (
  data: BankTokenLinkCreateRequest,
) => Promise<BankTokenLinkCreateResponse>;
