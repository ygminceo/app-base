import { bankAccountAddHandler } from '@lib/backend/payment/handlers';
import { Database } from '@lib/backend/utils/Database/Database';
import { BankAccountAddRequestModel, BankAccountAddResponseModel } from '@lib/common/payment/models';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

const database = new Database();

export const main = requestHook<BankAccountAddRequestModel, BankAccountAddResponseModel>(async (data) => {
  const accountCollection = database.getCollection('Account');
  return await bankAccountAddHandler({ data, accountCollection });
});
