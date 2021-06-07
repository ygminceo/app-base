import { bankTokenLinkCreateFunction } from '@lib/backend/payment/handlers/bankTokenLinkCreate/bankTokenLinkCreate.model';
import { bankApi } from '@lib/backend/payment/utils/BankApi/BankApi';

export const bankTokenLinkCreateHandler: bankTokenLinkCreateFunction = async (data) =>
  bankApi.bankTokenLinkCreate(data);
