import { CardAddRequestModel, CardAddResponseModel } from '@lib/common/billing/models';
import { cardAddHandler } from '@lib/backend/billing/handlers';
import { Database } from '@lib/backend/core/utils/Database/Database';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

const database = new Database();

class Handler implements HandlerModel<CardAddRequestModel, CardAddResponseModel> {
  @handler()
  async main(data: CardAddRequestModel, uid: string) {
    const userCollection = database.getCollection('User');
    return await cardAddHandler({ uid, data, userCollection });
  }
}

export const main = new Handler().main;
