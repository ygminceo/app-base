import { config } from '@lib/common/core/utils/Config/Config';
import { StripeIntegrationModel, StripeIntentModel } from '@lib/common/integration/stripe/models';

const SERVER_STRIPE_TOKEN = config.get<string>('SERVER_STRIPE_TOKEN', '');
const stripe = require('stripe')(SERVER_STRIPE_TOKEN);

class StripeAdmin {
  constructor() {}

  public async createIntegration(): Promise<StripeIntegrationModel> {
    const customer = await stripe.customers.create();
    return { id: customer.id };
  }

  public async createIntent(id: string): Promise<StripeIntentModel> {
    const intent = await stripe.setupIntents.create({ customer: id });
    return { secret: intent.client_secret };
  }
}

export const stripeAdmin = new StripeAdmin();
