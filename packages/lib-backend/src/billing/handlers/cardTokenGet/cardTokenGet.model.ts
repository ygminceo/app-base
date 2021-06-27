import { AuthorizedRequestModel } from '@lib/common/authentication/models';
import { CardTokenGetResponseModel } from '@lib/common/billing/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';

export type CardTokenGetHandlerModel = (
  params: {
    userCollection: CollectionModel;
  } & AuthorizedRequestModel,
) => Promise<CardTokenGetResponseModel>;
