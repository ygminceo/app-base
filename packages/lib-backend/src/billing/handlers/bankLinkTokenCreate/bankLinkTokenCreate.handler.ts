import { BankLinkTokenCreateHandlerModel } from '@lib/backend/billing/handlers/bankLinkTokenCreate/bankLinkTokenCreate.model';
import { plaidAdmin } from '@lib/backend/billing/utils/PlaidAdmin/PlaidAdmin';

export const bankLinkTokenCreateHandler: BankLinkTokenCreateHandlerModel = async (data) =>
  plaidAdmin.bankLinkTokenCreate(data);
