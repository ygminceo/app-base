import { DuplicateError } from '@lib/common/core/errors';
import { UserAlreadyExistsError } from '@lib/common/user/errors';
import { UserCreateRequestModel, UserCreateResponseModel } from '@lib/common/user/models';
import { UserCreateHandlerModel } from '@lib/backend/user/handlers/userCreate/userCreate.model';

export const userCreateHandler: UserCreateHandlerModel = async ({ data, userCollection }) => {
  try {
    return await userCollection.save<UserCreateRequestModel, UserCreateResponseModel>(data);
  } catch (e) {
    if (e instanceof DuplicateError) {
      throw new UserAlreadyExistsError();
    }
    throw Error(e);
  }
};
