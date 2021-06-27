import { AuthorizedRequestModel } from '@lib/common/authentication/models';
import { BankAddRequestModel, BankAddResponseModel } from '@lib/common/billing/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';

export type BankAddHandlerModel = (
  params: {
    data: BankAddRequestModel;
    userCollection: CollectionModel;
  } & AuthorizedRequestModel,
) => Promise<BankAddResponseModel>;
