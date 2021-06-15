import { AccountGetHandlerModel } from '@lib/backend/account/handlers/accountGet/accountGet.model';
import { AccountModel, AccountGetRequestModel } from '@lib/common/account/models';

export const accountGetHandler: AccountGetHandlerModel = async ({ data, accountCollection, select }) =>
  accountCollection.get<AccountGetRequestModel, AccountModel>(data, select);
