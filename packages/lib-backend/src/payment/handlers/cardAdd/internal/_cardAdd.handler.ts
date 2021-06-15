import { _CardAddHandlerModel } from '@lib/backend/payment/handlers/cardAdd/internal/_cardAdd.handler';
import { config } from '@lib/common/core/utils/Config/Config';
import { CardAddRequestModel } from '@lib/common/payment/models';

const SERVER_STRIPE_TOKEN = config.get<string>('SERVER_STRIPE_TOKEN', '');
const stripe = require('stripe')(SERVER_STRIPE_TOKEN);

export const _cardAddHandler: _CardAddHandlerModel = async (data: CardAddRequestModel) => {
  const customer = await stripe.customers.create();
  const intent = await stripe.setupIntents.create({
    customer: customer.id,
  });

  return null;
};
