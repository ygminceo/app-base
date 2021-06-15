import { AccountCreateHandlerModel } from '@lib/backend/account/handlers/accountCreate/accountCreate.model';
import { stripeIntegrationCreateHandler } from '@lib/backend/integration/stripe/handlers/stripeIntegrationCreate/stripeIntegrationCreate.handler';
import { AccountAlreadyExistsError } from '@lib/common/account/errors';
import { AccountCreateRequestModel, AccountCreateResponseModel } from '@lib/common/account/models';
import { DuplicateError } from '@lib/common/core/errors';

export const accountCreateHandler: AccountCreateHandlerModel = async ({
  data,
  accountCollection,
}) => {
  const dataFinal = await _before(data);
  return accountCollection
    .save<AccountCreateRequestModel, AccountCreateResponseModel>(dataFinal)
    .catch((e) => {
      if (e instanceof DuplicateError) {
        throw new AccountAlreadyExistsError();
      }
      throw Error(e);
    });
};

const _before = async (data: AccountCreateRequestModel): Promise<AccountCreateRequestModel> => ({
  ...data,
  integration: {
    stripe: await stripeIntegrationCreateHandler(),
  },
});
