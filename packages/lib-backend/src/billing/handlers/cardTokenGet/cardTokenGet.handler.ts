import { get, set } from 'lodash';
import { UserGetRequestModel, UserModel } from '@lib/common/user/models';
import { CardTokenGetHandlerModel } from '@lib/backend/billing/handlers/cardTokenGet/cardTokenGet.model';
import { stripeAdmin } from '@lib/backend/billing/utils/StripeAdmin/StripeAdmin';

export const cardTokenGetHandler: CardTokenGetHandlerModel = async ({ uid, userCollection }) => {
  const user = await userCollection.get<UserGetRequestModel, UserModel>({ _id: uid });
  let stripeId = get(user.linkedAccounts, ['stripe', 'id'], '');
  if (!stripeId) {
    stripeId = await stripeAdmin.createStripeCustomer();
    set(user, ['linkedAccounts', 'stripe'], { id: stripeId });
    await userCollection.save(user);
  }
  return { token: await stripeAdmin.createIntent(stripeId) };
};
