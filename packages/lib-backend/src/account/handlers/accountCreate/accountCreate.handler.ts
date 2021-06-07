import { accountCreateFunction } from '@lib/backend/account/handlers/accountCreate/accountCreate.model';
import { AccountAlreadyExistsError } from '@lib/common/account/errors';
import { AccountClass, AccountClassOmitId } from '@lib/common/account/models';
import { DuplicateError } from '@lib/common/core/errors';

export const accountCreateHandler: accountCreateFunction = async ({ data, accountCollection }) =>
  accountCollection.save<AccountClassOmitId, AccountClass>(data).catch((e) => {
    if (e instanceof DuplicateError) {
      throw new AccountAlreadyExistsError();
    }
    throw Error(e);
  });
