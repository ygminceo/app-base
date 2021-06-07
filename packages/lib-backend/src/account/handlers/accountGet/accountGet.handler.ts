import { accountGetFunction } from '@lib/backend/account/handlers/accountGet/accountGet.model';
import { AccountClass, AccountGetRequest } from '@lib/common/account/models';

export const accountGetHandler: accountGetFunction = async ({ data, accountCollection, select }) =>
  accountCollection.get<AccountGetRequest, AccountClass>(data, select);
