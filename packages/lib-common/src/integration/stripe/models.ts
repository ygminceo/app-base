export interface StripeIntegrationModel {
  id: string;
}

export type StripeServiceModel = 'intent';

// Integration
export interface StripeIntegrationGetRequestModel {
  accountId: string;
  service: StripeServiceModel;
}

export interface StripeIntegrationGetResponseModel extends StripeIntegrationModel {
  intent?: StripeIntentModel;
}

// Intent
export interface StripeIntentModel {
  secret: string;
}
