import { StripeIntegrationCreateHandlerModel } from '@lib/backend/integration/stripe/handlers/stripeIntegrationCreate/stripeIntegrationCreate.model';
import { stripeAdmin } from '@lib/backend/integration/stripe/utils/StripeAdmin';

export const stripeIntegrationCreateHandler: StripeIntegrationCreateHandlerModel =
  stripeAdmin.createIntegration;
