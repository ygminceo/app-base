import { BankAddRequestModel, BankAddResponseModel } from '@lib/common/billing/models';
import { bankAddHandler } from '@lib/backend/billing/handlers';
import { Database } from '@lib/backend/core/utils/Database/Database';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

const database = new Database();

class Handler implements HandlerModel<BankAddRequestModel, BankAddResponseModel> {
  @handler()
  async main(data: BankAddRequestModel, uid: string) {
    const userCollection = database.getCollection('User');
    return await bankAddHandler({ uid, data, userCollection });
  }
}

export const main = new Handler().main;
