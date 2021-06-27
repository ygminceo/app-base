import { CardTokenGetResponseModel } from '@lib/common/billing/models';
import { cardTokenGetHandler } from '@lib/backend/billing/handlers';
import { Database } from '@lib/backend/core/utils/Database/Database';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

const database = new Database();

class Handler implements HandlerModel<void, CardTokenGetResponseModel> {
  @handler()
  async main(data: void, uid: string) {
    const userCollection = database.getCollection('User');
    return await cardTokenGetHandler({ uid, userCollection });
  }
}

export const main = new Handler().main;
