import { StripeIntegrationGetHandlerModel } from '@lib/backend/integration/stripe/handlers/stripeIntegrationGet/stripeIntegrationGet.model';
import { stripeAdmin } from '@lib/backend/integration/stripe/utils/StripeAdmin';
import { AccountGetRequestModel, AccountModel } from '@lib/common/account/models';
import { get, set } from 'lodash';

export const stripeIntegrationGetHandler: StripeIntegrationGetHandlerModel = async ({
  account,
}) => {
  const account = await accountCollection.get<AccountGetRequestModel, AccountModel>({
    _id: data.accountId,
  });
  let integration = get(account, ['integration', 'stripe']);
  if (!integration) {
    integration = stripeAdmin.createIntegration();
    set(account, ['integration', 'stripe'], integration);
    await accountCollection.save(account);
  }

  if (data.service === 'intent') {
    const intent = await stripeAdmin.createIntent(integration.id);
    integration.intent = intent;
  }

  return integration;
};
