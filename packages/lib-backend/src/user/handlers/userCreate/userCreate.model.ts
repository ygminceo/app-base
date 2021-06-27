import { UserCreateRequestModel, UserCreateResponseModel } from '@lib/common/user/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';

export type UserCreateHandlerModel = (params: {
  data: UserCreateRequestModel;
  userCollection: CollectionModel;
}) => Promise<UserCreateResponseModel>;
