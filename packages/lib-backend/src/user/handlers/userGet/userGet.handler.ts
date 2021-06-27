import { UserNotFoundError } from '@lib/common/user/errors';
import { UserGetRequestModel, UserModel } from '@lib/common/user/models';
import { UserGetHandlerModel } from '@lib/backend/user/handlers/userGet/userGet.model';

export const userGetHandler: UserGetHandlerModel = async ({ data, userCollection }) => {
  const user = await userCollection.get<UserGetRequestModel, UserModel>(data);
  if (user === undefined) {
    throw new UserNotFoundError();
  }
  return user;
};
