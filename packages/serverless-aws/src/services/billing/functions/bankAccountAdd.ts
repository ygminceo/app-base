import {
  BankAccountAddRequestModel,
  BankAccountAddResponseModel,
} from '@lib/common/billing/models';
import { bankAccountAddHandler } from '@lib/backend/billing/handlers';
import { Database } from '@lib/backend/utils/Database/Database';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

const database = new Database();

export const main = requestHook<BankAccountAddRequestModel, BankAccountAddResponseModel>(
  async (data) => {
    const accountCollection = database.getCollection('Account');
    return await bankAccountAddHandler({ data, accountCollection });
  },
);
