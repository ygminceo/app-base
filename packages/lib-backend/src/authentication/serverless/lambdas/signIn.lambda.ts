import { SignInRequestModel, SignInResponseModel } from '@lib/common/authentication/models';
import { signInHandler } from '@lib/backend/authentication/handlers';
import { Database } from '@lib/backend/utils/Database/Database';

const database = new Database();

export const signIn = async (data: SignInRequestModel): Promise<SignInResponseModel> => {
  const accountCollection = database.getCollection('Account');
  const otpCollection = database.getCollection('Otp');
  return await signInHandler({ data, accountCollection, otpCollection });
};
