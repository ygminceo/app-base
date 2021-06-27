import { config } from '@lib/common/core/utils/Config/Config';

const SERVER_STRIPE_TOKEN = config.get<string>('SERVER_STRIPE_TOKEN', '');
const stripe = require('stripe')(SERVER_STRIPE_TOKEN);

class StripeAdmin {
  constructor() {}

  public async createStripeCustomer(): Promise<string> {
    const customer = await stripe.customers.create();
    return customer.id;
  }

  public async createIntent(id: string): Promise<string> {
    const intent = await stripe.setupIntents.create({ customer: id });
    return intent.client_secret;
  }

  public async getPaymentMethods(stripeId: string): Promise<null> {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: stripeId,
      type: 'card',
    });
    console.warn(paymentMethods);
    return Promise.resolve(null);
  }
}

export const stripeAdmin = new StripeAdmin();
