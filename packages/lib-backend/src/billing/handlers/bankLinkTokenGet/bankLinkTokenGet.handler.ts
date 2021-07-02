import { BankLinkTokenGetHandlerModel } from '@lib/backend/billing/handlers/bankLinkTokenGet/bankLinkTokenGet.model';
import { plaidAdmin } from '@lib/backend/billing/utils/PlaidAdmin/PlaidAdmin';

export const bankLinkTokenGetHandler: BankLinkTokenGetHandlerModel = async ({ uid }) =>
  plaidAdmin.bankLinkTokenGet(uid);
