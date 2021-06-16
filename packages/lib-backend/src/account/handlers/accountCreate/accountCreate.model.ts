import { AccountCreateRequestModel, AccountCreateResponseModel } from '@lib/common/account/models';
import { CollectionModel } from '@lib/backend/utils/Database/Database.model';

export type AccountCreateHandlerModel = (params: {
  data: AccountCreateRequestModel;
  accountCollection: CollectionModel;
}) => Promise<AccountCreateResponseModel>;
