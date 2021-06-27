import { AuthorizedRequestModel } from '@lib/common/authentication/models';
import { CardAddRequestModel, CardAddResponseModel } from '@lib/common/billing/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';

export type CardAddHandlerModel = (
  params: {
    data: CardAddRequestModel;
    userCollection: CollectionModel;
  } & AuthorizedRequestModel,
) => Promise<CardAddResponseModel>;
