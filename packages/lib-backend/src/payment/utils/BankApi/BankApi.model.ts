import {
  BankTokenAccessCreateRequest,
  BankTokenAccessCreateResponse,
  BankTokenLinkCreateRequest,
  BankTokenLinkCreateResponse,
} from '@lib/common/payment/models';

export interface BankApiClass {
  bankTokenLinkCreate(data: BankTokenLinkCreateRequest): Promise<BankTokenLinkCreateResponse>;
  bankTokenAccessCreate(data: BankTokenAccessCreateRequest): Promise<BankTokenAccessCreateResponse>;
}
