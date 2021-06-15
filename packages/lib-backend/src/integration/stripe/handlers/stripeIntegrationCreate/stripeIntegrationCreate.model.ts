import { StripeIntegrationModel } from '@lib/common/integration/stripe/models';

export type StripeIntegrationCreateHandlerModel = () => Promise<StripeIntegrationModel>;
