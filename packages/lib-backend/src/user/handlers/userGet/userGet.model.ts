import { UserGetRequestModel, UserModel } from '@lib/common/user/models';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';

export type UserGetHandlerModel = (params: {
  data: UserGetRequestModel;
  userCollection: CollectionModel;
}) => Promise<UserModel>;
