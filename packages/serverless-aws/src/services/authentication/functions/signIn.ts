import { signInHandler } from '@lib/backend/authentication/handlers';
import { Database } from '@lib/backend/utils/Database/Database';
import { SignInRequest, SignInResponse } from '@lib/common/authentication/models';
import { requestHook } from '@serverless/aws/core/requestHook/requestHook';

const database = new Database();

export const main = requestHook<SignInRequest, SignInResponse>(async (data) => {
  const accountCollection = database.getCollection('Account');
  const otpCollection = database.getCollection('Otp');
  return await signInHandler({
    data,
    accountCollection,
    otpCollection,
  });
});
