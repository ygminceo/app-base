import { SubscriptionCreateRequestModel } from '@lib/common/landing/models';
import { Database } from '@lib/backend/core/utils/Database/Database';
import { subscriptionCreateHandler } from '@lib/backend/landing/handlers';
import { Mailer } from '@lib/backend/mail/utils/Mailer/Mailer';
import { HandlerModel } from '@lib/backend/serverless/serverless.model';
import { handler } from '@serverless/aws/core/decorators/handler/handler';

const database = new Database();

const mailer = new Mailer();

class Handler implements HandlerModel<SubscriptionCreateRequestModel, void> {
  @handler()
  async main(data: SubscriptionCreateRequestModel) {
    const subscriptionCollection = database.getCollection('Subscription');
    return await subscriptionCreateHandler({ data, subscriptionCollection, mailer });
  }
}

export const main = new Handler().main;
