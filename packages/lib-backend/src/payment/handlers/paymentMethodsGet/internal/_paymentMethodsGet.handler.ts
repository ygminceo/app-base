import { accountGetHandler } from '@lib/backend/account/handlers';
import { stripeAdmin } from '@lib/backend/integration/stripe/utils/StripeAdmin';
import { _paymentMethodsGetFunction } from '@lib/backend/payment/handlers/paymentMethodsGet/internal/_paymentMethodsGet.model';
import { CollectionModel } from '@lib/backend/utils/Database/Database.model';
import { AccountModel } from '@lib/common/account/models';
import { StripeIntegrationModel } from '@lib/common/integration/stripe/models';
import { get, pick, set } from 'lodash';

export const _paymentMethodsGetHandler: _paymentMethodsGetFunction = async ({
  data,
  accountCollection,
}) => {
  const account = await accountGetHandler({
    data: { _id: data.accountId },
    accountCollection,
  });
  // await _stripeIntegration(account, accountCollection);
  return pick(account, ['integration']);
};

const _stripeIntegration = async (
  account: AccountModel,
  accountCollection: CollectionModel,
): Promise<void> => {
  let integration: StripeIntegrationModel = get(account, ['integration', 'stripe']);
  if (!integration) {
    integration = await stripeAdmin.createIntegration();
    set(account, ['integration', 'stripe'], integration);
    await accountCollection.save(account);
  }
};
