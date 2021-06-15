import { BankTokenLinkCreateRequestModel, BankTokenLinkCreateResponseModel } from '@lib/common/payment/models';

export type BankTokenLinkCreateHandlerModel = (
  data: BankTokenLinkCreateRequestModel,
) => Promise<BankTokenLinkCreateResponseModel>;
