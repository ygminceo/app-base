import { AccountGetRequestModel, AccountModel } from '@lib/common/account/models';
import { AccountGetHandlerModel } from '@lib/backend/account/handlers/accountGet/accountGet.model';

export const accountGetHandler: AccountGetHandlerModel = async ({ data, accountCollection }) =>
  accountCollection.get<AccountGetRequestModel, AccountModel>(data);
