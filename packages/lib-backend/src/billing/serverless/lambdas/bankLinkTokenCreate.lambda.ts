import {
  BankLinkTokenCreateRequestModel,
  BankLinkTokenCreateResponseModel,
} from '@lib/common/billing/models';
import { bankLinkTokenCreateHandler } from '@lib/backend/billing/handlers';

export const bankLinkTokenCreate = async (
  data: BankLinkTokenCreateRequestModel,
): Promise<BankLinkTokenCreateResponseModel> => await bankLinkTokenCreateHandler(data);
