import {
  BankAccountAddRequestModel,
  BankAccountAddResponseModel,
} from '@lib/common/billing/models';
import { bankAccountAddHandler } from '@lib/backend/billing/handlers';
import { Database } from '@lib/backend/utils/Database/Database';

const database = new Database();

export const bankAccountAdd = async (
  data: BankAccountAddRequestModel,
): Promise<BankAccountAddResponseModel> => {
  const accountCollection = database.getCollection('Account');
  return await bankAccountAddHandler({ data, accountCollection });
};
