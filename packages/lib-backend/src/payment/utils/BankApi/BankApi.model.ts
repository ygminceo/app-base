import {
  BankTokenAccessCreateRequestModel,
  BankTokenAccessCreateResponseModel,
  BankTokenLinkCreateRequestModel,
  BankTokenLinkCreateResponseModel,
} from '@lib/common/payment/models';

export interface BankApiModel {
  bankTokenLinkCreate(
    data: BankTokenLinkCreateRequestModel,
  ): Promise<BankTokenLinkCreateResponseModel>;
  bankTokenAccessCreate(
    data: BankTokenAccessCreateRequestModel,
  ): Promise<BankTokenAccessCreateResponseModel>;
}
