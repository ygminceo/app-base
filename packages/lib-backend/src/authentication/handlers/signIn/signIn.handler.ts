import { pick, toString, unset } from 'lodash';
import { ACCOUNT_PRIMARY_KEYS, ACCOUNT_SUMMARY_KEYS } from '@lib/common/account/constants';
import { AccountCreateRequestModel } from '@lib/common/account/models';
import { SignInRequestModel } from '@lib/common/authentication/models';
import { accountCreateHandler, accountGetHandler } from '@lib/backend/account/handlers';
import { tokenCreateHandler } from '@lib/backend/authentication/handlers';
import { otpVerifyHandler } from '@lib/backend/authentication/handlers/otpVerify/otpVerify.handler';
import { SignInHandlerModel } from '@lib/backend/authentication/handlers/signIn/signIn.model';
import { CollectionModel } from '@lib/backend/utils/Database/Database.model';

export const signInHandler: SignInHandlerModel = async ({
  data,
  accountCollection,
  otpCollection,
}) => {
  const dataFinal = await _before(data, otpCollection);

  let account = await accountGetHandler({
    data: pick(dataFinal, ACCOUNT_PRIMARY_KEYS),
    accountCollection,
  });
  // Sign up
  if (account === undefined) {
    account = await accountCreateHandler({ data: dataFinal, accountCollection });
  }

  const token = await tokenCreateHandler(account);
  return {
    token,
    account: {
      ...pick(account, ACCOUNT_SUMMARY_KEYS),
      // TODO: do we need this for non-mongo?
      _id: toString(account._id),
    },
  };
};

const _before = async (
  data: SignInRequestModel,
  otpCollection: CollectionModel,
): Promise<AccountCreateRequestModel> => {
  await otpVerifyHandler({
    data: { username: data.emailAddress, otp: data.otp },
    otpCollection: otpCollection as CollectionModel,
  });
  unset(data, 'otp');
  return data;
};
