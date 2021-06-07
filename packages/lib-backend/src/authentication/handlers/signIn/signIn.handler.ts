import { accountCreateHandler, accountGetHandler } from '@lib/backend/account/handlers';
import { tokenCreateHandler } from '@lib/backend/authentication/handlers';
import { otpVerifyHandler } from '@lib/backend/authentication/handlers/otpVerify/otpVerify.handler';
import { signInFunciton } from '@lib/backend/authentication/handlers/signIn/signIn.model';
import { CollectionClass } from '@lib/backend/utils/Database/Database.model';
import { ACCOUNT_PRIMARY_KEYS } from '@lib/common/account/constants';
import { AccountClassOmitId } from '@lib/common/account/models';
import { TOKEN_CLAIM_KEYS } from '@lib/common/authentication/constants';
import { SignInRequest } from '@lib/common/authentication/models';
import { pick, toString, unset } from 'lodash';

export const signInHandler: signInFunciton = async ({ data, accountCollection, otpCollection }) => {
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
    account: {
      ...pick(account, TOKEN_CLAIM_KEYS),
      id: toString(account._id),
    },
    token,
  };
};

const _before = async (
  data: SignInRequest,
  otpCollection: CollectionClass,
): Promise<AccountClassOmitId> => {
  await otpVerifyHandler({
    data: { username: data.emailAddress, otp: data.otp },
    otpCollection: otpCollection as CollectionClass,
  });
  unset(data, 'otp');
  return data;
};
