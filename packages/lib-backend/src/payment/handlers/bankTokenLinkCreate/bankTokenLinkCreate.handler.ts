import { BankTokenLinkCreateHandlerModel } from '@lib/backend/payment/handlers/bankTokenLinkCreate/bankTokenLinkCreate.model';
import { bankApi } from '@lib/backend/payment/utils/BankApi/BankApi';

export const bankTokenLinkCreateHandler: BankTokenLinkCreateHandlerModel = async (data) =>
  bankApi.bankTokenLinkCreate(data);
