import { CollectionModel } from '@lib/backend/utils/Database/Database.model';
import { AccountGetRequestModel, AccountModel } from '@lib/common/account/models';

export type AccountGetHandlerModel = (params: {
  data: AccountGetRequestModel;
  accountCollection: CollectionModel;
  select?: (keyof AccountModel)[];
}) => Promise<AccountModel>;
