import { SubscriptionCreateHandlerModel } from '@lib/backend/landing/handlers/subscriptionCreate/subscriptionCreate.model';

export const subscriptionCreateHandler: SubscriptionCreateHandlerModel = async ({
  data,
  subscriptionCollection,
  mailer,
}) => {
  return await subscriptionCollection.save(data);
};
