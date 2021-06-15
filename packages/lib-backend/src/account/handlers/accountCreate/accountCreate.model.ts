import { CollectionModel } from '@lib/backend/utils/Database/Database.model';
import { AccountCreateRequestModel, AccountCreateResponseModel } from '@lib/common/account/models';

export type AccountCreateHandlerModel = (params: {
  data: AccountCreateRequestModel;
  accountCollection: CollectionModel;
}) => Promise<AccountCreateResponseModel>;
