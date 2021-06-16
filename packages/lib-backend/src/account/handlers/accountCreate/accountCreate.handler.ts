import { AccountAlreadyExistsError } from '@lib/common/account/errors';
import { AccountCreateRequestModel, AccountCreateResponseModel } from '@lib/common/account/models';
import { DuplicateError } from '@lib/common/core/errors';
import { AccountCreateHandlerModel } from '@lib/backend/account/handlers/accountCreate/accountCreate.model';

export const accountCreateHandler: AccountCreateHandlerModel = async ({
  data,
  accountCollection,
}) =>
  accountCollection.save<AccountCreateRequestModel, AccountCreateResponseModel>(data).catch((e) => {
    if (e instanceof DuplicateError) {
      throw new AccountAlreadyExistsError();
    }
    throw Error(e);
  });
