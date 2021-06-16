import { AccountGetRequestModel, AccountModel } from '@lib/common/account/models';
import { CollectionModel } from '@lib/backend/utils/Database/Database.model';

export type AccountGetHandlerModel = (params: {
  data: AccountGetRequestModel;
  accountCollection: CollectionModel;
}) => Promise<AccountModel>;
