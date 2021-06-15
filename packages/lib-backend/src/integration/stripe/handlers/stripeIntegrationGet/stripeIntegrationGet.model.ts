import { AccountModel } from '@lib/common/account/models';
import { StripeIntegrationGetResponseModel } from '@lib/common/integration/stripe/models';

export type StripeIntegrationGetHandlerModel = (params: {
  account: AccountModel;
}) => Promise<StripeIntegrationGetResponseModel>;
