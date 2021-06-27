import { pick, toString, unset } from 'lodash';
import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { SignInRequestModel } from '@lib/common/authentication/models';
import { HttpError } from '@lib/common/core/utils/HttpClient/HttpClient.error';
import { USER_PRIMARY_KEYS, USER_SUMMARY_KEYS } from '@lib/common/user/constants';
import { UserNotFoundError } from '@lib/common/user/errors';
import { UserCreateRequestModel } from '@lib/common/user/models';
import { otpVerifyHandler } from '@lib/backend/authentication/handlers/otpVerify/otpVerify.handler';
import { SignInHandlerModel } from '@lib/backend/authentication/handlers/signIn/signIn.model';
import { CollectionModel } from '@lib/backend/core/utils/Database/Database.model';
import { userCreateHandler, userGetHandler } from '@lib/backend/user/handlers';

export const signInHandler: SignInHandlerModel = async ({
  data,
  userCollection,
  otpCollection,
  sessionAdmin,
}) => {
  const dataFinal = await _before(data, otpCollection);

  let user;
  try {
    user = await userGetHandler({
      data: pick(dataFinal, USER_PRIMARY_KEYS),
      userCollection,
    });
  } catch (e) {
    // Sign up
    if (e instanceof UserNotFoundError) {
      user = await userCreateHandler({ data: dataFinal, userCollection });
    }
    throw new HttpError(e);
  }

  const token = await sessionAdmin.createToken(user._id, pick(user, TOKEN_CLAIM_KEYS));
  return {
    token,
    user: {
      ...pick(user, USER_SUMMARY_KEYS),
      // TODO: do we need this for non-mongo?
      _id: toString(user._id),
    },
  };
};

const _before = async (
  data: SignInRequestModel,
  otpCollection: CollectionModel,
): Promise<UserCreateRequestModel> => {
  // TODO: phone?
  await otpVerifyHandler({
    data: { username: data.emailAddress, otp: data.otp },
    otpCollection: otpCollection as CollectionModel,
  });
  unset(data, 'otp');
  return data;
};
